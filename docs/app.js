(() => {
  "use strict";

  const config = window.JOURNEY_CONFIG || {};
  const ownerEmail = String(config.ownerEmail || "").trim().toLowerCase();
  const configured = Boolean(
    config.supabaseUrl &&
    config.supabaseAnonKey &&
    ownerEmail &&
    window.supabase &&
    typeof window.supabase.createClient === "function"
  );

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const defaultSchedule = {
    Monday: "Python study or current core topic — 45 minutes",
    Tuesday: "Hands-on exercises — 45 minutes",
    Wednesday: "Website or project practice — 45 minutes",
    Thursday: "Review errors and rewrite notes — 30–45 minutes",
    Friday: "Small coding task or project progress — 45 minutes",
    Saturday: "Longer project session — 60–90 minutes if available",
    Sunday: "Weekly review, update progress, plan next step — 20 minutes"
  };

  const demoGoals = [
    { id: "demo-1", phase: "Phase 0 — Workflow", title: "Maintain the learning repository", description: "Keep the README, roadmap, goals, and progress tracker understandable and current.", timeframe: "Month 1, first 1–2 weeks", study_schedule: "One short review each week", completed: false, sort_order: 1 },
    { id: "demo-2", phase: "Phase 1 — Python", title: "Practise Python fundamentals", description: "Work with types, conditions, loops, functions, collections, files, exceptions, and modules.", timeframe: "Months 1–5", study_schedule: "3–5 focused practice sessions each week", completed: false, sort_order: 2 },
    { id: "demo-3", phase: "Phase 1 — Python", title: "Build a CLI Task Manager", description: "Create, list, complete, and remove tasks; save them to a file and document how to run the program.", timeframe: "Months 2–4", study_schedule: "One project session each week", completed: false, sort_order: 3 },
    { id: "demo-4", phase: "Phase 1 — Python", title: "Build a Hardware/Flight Log Parser", description: "Use a safe sample log, extract chosen fields, and generate a readable summary.", timeframe: "Months 4–5", study_schedule: "One project session each week", completed: false, sort_order: 4 },
    { id: "demo-5", phase: "Phase 2 — Web", title: "Improve the technical blog", description: "Use semantic HTML, an external CSS file, responsive layouts, and a useful JavaScript feature.", timeframe: "Months 6–8", study_schedule: "3 sessions each week; small changes", completed: false, sort_order: 5 },
    { id: "demo-6", phase: "Phase 3 — Algorithms", title: "Learn data structures and Big-O", description: "Explain common structures, test basic algorithms, and write down complexity and edge cases.", timeframe: "Months 9–12", study_schedule: "3 practice sessions each week", completed: false, sort_order: 6 },
    { id: "demo-7", phase: "Phase 3 — Algorithms", title: "Build a pathfinding project", description: "Start with breadth-first search and extend to Dijkstra when ready.", timeframe: "Months 10–12", study_schedule: "One project session each week", completed: false, sort_order: 7 },
    { id: "demo-8", phase: "Phase 4 — CS and databases", title: "Create an inventory database", description: "Design related tables and write tested SQL queries with joins and aggregation.", timeframe: "Months 13–15", study_schedule: "2 SQL sessions and 1 CS-notes session each week", completed: false, sort_order: 8 },
    { id: "demo-9", phase: "Phase 5 — Backend", title: "Build a database-backed Inventory API", description: "Use one Python framework, validate requests, document endpoints, and persist data in a database.", timeframe: "Months 16–20", study_schedule: "3 sessions each week; build incrementally", completed: false, sort_order: 9 },
    { id: "demo-10", phase: "Phase 6 — Deployment", title: "Deploy one portfolio project", description: "Add automated checks, deploy the project, and write clear setup and troubleshooting instructions.", timeframe: "Months 21–24", study_schedule: "One deployment/documentation session each week", completed: false, sort_order: 10 }
  ];

  const el = (id) => document.getElementById(id);
  const goalList = el("goalList");
  const noticeBar = el("noticeBar");
  let client = null;
  let user = null;
  let goals = demoGoals.map((goal) => Object.assign({}, goal));
  let schedule = Object.assign({}, defaultSchedule);
  let activeFilter = "all";

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
  }

  function showNotice(message, persistent) {
    noticeBar.textContent = message;
    noticeBar.hidden = !message;
    noticeBar.dataset.persistent = persistent ? "true" : "false";
  }

  function isOwner() {
    return Boolean(user && user.email && ownerEmail && user.email.toLowerCase() === ownerEmail);
  }

  function renderAuth() {
    const owner = isOwner();
    el("addGoalButton").hidden = !owner;
    el("editScheduleButton").hidden = !owner;
    el("authButton").textContent = owner ? "Sign out" : (configured ? "Owner sign in" : "Setup needed");
    el("modePill").textContent = owner ? "Owner editing enabled" : "Public · read only";
  }

  function renderSchedule() {
    el("scheduleList").innerHTML = days.map((day) =>
      "<div class='schedule-row'><span class='schedule-day'>" + escapeHtml(day) +
      "</span><span class='schedule-task'>" + escapeHtml(schedule[day] || "Rest / flexible time") + "</span></div>"
    ).join("");
  }

  function renderGoals() {
    const sorted = goals.slice().sort((a, b) => Number(a.sort_order || 0) - Number(b.sort_order || 0));
    const completeCount = sorted.filter((goal) => Boolean(goal.completed)).length;
    const percent = sorted.length ? Math.round((completeCount / sorted.length) * 100) : 0;
    el("completedCount").textContent = String(completeCount);
    el("goalsCount").textContent = String(sorted.length);
    el("completionPercent").textContent = percent + "%";
    el("progressFill").style.width = percent + "%";
    el("progressBar").setAttribute("aria-valuenow", String(percent));

    const filtered = sorted.filter((goal) => {
      if (activeFilter === "active") return !goal.completed;
      if (activeFilter === "completed") return Boolean(goal.completed);
      return true;
    });
    el("visibleGoalCount").textContent = "Showing " + filtered.length + (filtered.length === 1 ? " goal" : " goals");
    el("emptyState").hidden = filtered.length > 0;
    goalList.hidden = filtered.length === 0;

    goalList.innerHTML = filtered.map((goal) => {
      const done = Boolean(goal.completed);
      const checkbox = "<input class='goal-check' type='checkbox' aria-label='Mark " + escapeHtml(goal.title) +
        " complete' data-complete-id='" + escapeHtml(goal.id) + "'" + (done ? " checked" : "") +
        (isOwner() ? "" : " disabled") + ">";
      const editButton = isOwner()
        ? "<button class='goal-edit' type='button' data-edit-id='" + escapeHtml(goal.id) + "' aria-label='Edit " + escapeHtml(goal.title) + "' title='Edit goal'>✎</button>"
        : "";
      return "<article class='goal-card" + (done ? " is-complete" : "") + "'>" +
        "<div class='goal-card-top'>" + checkbox +
        "<div class='goal-main'><div class='goal-phase'>" + escapeHtml(goal.phase) + "</div>" +
        "<h3 class='goal-title'>" + escapeHtml(goal.title) + "</h3>" +
        "<p class='goal-description'>" + escapeHtml(goal.description) + "</p></div>" + editButton + "</div>" +
        "<div class='goal-meta'><span class='meta-chip'>◷ <strong>" + escapeHtml(goal.timeframe || "Timeframe not set") +
        "</strong></span><span class='meta-chip'>▦ " + escapeHtml(goal.study_schedule || "Study plan not set") + "</span></div></article>";
    }).join("");

    goalList.querySelectorAll("[data-complete-id]").forEach((checkbox) => {
      checkbox.addEventListener("change", async () => {
        if (!isOwner()) return;
        const goal = goals.find((item) => String(item.id) === checkbox.dataset.completeId);
        if (!goal) return;
        const oldValue = Boolean(goal.completed);
        goal.completed = checkbox.checked;
        renderGoals();
        try {
          await persistGoal(goal);
          showNotice("Goal status saved.", false);
        } catch (error) {
          goal.completed = oldValue;
          renderGoals();
          showNotice("Could not save the goal. Check the Supabase setup and access policies. " + error.message, true);
        }
      });
    });

    goalList.querySelectorAll("[data-edit-id]").forEach((button) => {
      button.addEventListener("click", () => {
        const goal = goals.find((item) => String(item.id) === button.dataset.editId);
        if (goal) openGoalDialog(goal);
      });
    });
  }

  function renderAll() {
    renderAuth();
    renderSchedule();
    renderGoals();
  }

  async function loadData() {
    if (!configured) {
      goals = demoGoals.map((goal) => Object.assign({}, goal));
      schedule = Object.assign({}, defaultSchedule);
      renderAll();
      showNotice("Preview mode: the sample goals and schedule are visible, but edits cannot be saved yet. Follow docs/SETUP.md to connect Supabase and publish owner-only editing.", true);
      return;
    }

    try {
      client = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
      const authResult = await client.auth.getUser();
      user = authResult.data && authResult.data.user ? authResult.data.user : null;

      client.auth.onAuthStateChange((_event, session) => {
        user = session && session.user ? session.user : null;
        renderAuth();
        renderGoals();
      });

      const goalResult = await client.from("goals").select("*").order("sort_order", { ascending: true });
      if (goalResult.error) throw goalResult.error;
      goals = goalResult.data || [];

      const scheduleResult = await client.from("journey_settings").select("value").eq("id", "weekly_schedule").maybeSingle();
      if (scheduleResult.error) throw scheduleResult.error;
      schedule = Object.assign({}, defaultSchedule, scheduleResult.data && scheduleResult.data.value ? scheduleResult.data.value : {});

      renderAll();
      if (isOwner()) showNotice("Signed in as the owner. Your changes save to the public dashboard.", false);
    } catch (error) {
      goals = demoGoals.map((goal) => Object.assign({}, goal));
      schedule = Object.assign({}, defaultSchedule);
      renderAll();
      showNotice("The database could not be loaded. Confirm the Supabase project, SQL schema, owner email, and browser config. Details: " + (error.message || "unknown error"), true);
    }
  }

  async function persistGoal(goal) {
    if (!client || !isOwner()) throw new Error("Owner sign-in is required.");
    const payload = {
      phase: String(goal.phase || ""),
      title: String(goal.title || ""),
      description: String(goal.description || ""),
      timeframe: String(goal.timeframe || ""),
      study_schedule: String(goal.study_schedule || ""),
      completed: Boolean(goal.completed),
      sort_order: Number(goal.sort_order || 0),
      updated_at: new Date().toISOString()
    };
    let result;
    if (goal.id && !String(goal.id).startsWith("demo-")) {
      result = await client.from("goals").update(payload).eq("id", goal.id).select("*").single();
    } else {
      result = await client.from("goals").insert(payload).select("*").single();
    }
    if (result.error) throw result.error;
    return result.data;
  }

  function openGoalDialog(goal) {
    const editing = Boolean(goal);
    const item = goal || { phase: "Phase 1 — Python", title: "", description: "", timeframe: "Months 1–5", study_schedule: "3 sessions each week", completed: false, sort_order: goals.length + 1 };
    el("goalDialogTitle").textContent = editing ? "Edit goal" : "Add a goal";
    el("goalId").value = editing ? item.id : "";
    el("goalTitle").value = item.title || "";
    el("goalPhase").value = item.phase || "";
    el("goalDescription").value = item.description || "";
    el("goalTimeframe").value = item.timeframe || "";
    el("goalStudySchedule").value = item.study_schedule || "";
    el("goalCompleted").checked = Boolean(item.completed);
    el("deleteGoalButton").hidden = !editing;
    el("goalMessage").textContent = "";
    el("goalDialog").showModal();
  }

  el("authButton").addEventListener("click", async () => {
    if (!configured) {
      showNotice("Owner editing is not configured yet. Follow docs/SETUP.md to connect Supabase and enable GitHub Pages.", true);
      return;
    }
    if (isOwner()) {
      const result = await client.auth.signOut();
      user = null;
      renderAll();
      if (result.error) showNotice("Could not sign out: " + result.error.message, true);
      else showNotice("Signed out. The dashboard is now in public read-only mode.", false);
      return;
    }
    el("loginMessage").textContent = "";
    el("loginDialog").showModal();
  });

  el("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const entered = el("ownerEmailInput").value.trim().toLowerCase();
    if (!configured || !client) {
      el("loginMessage").textContent = "Site setup is not complete yet. Follow docs/SETUP.md.";
      return;
    }
    if (entered !== ownerEmail) {
      el("loginMessage").textContent = "Use the owner email configured for this website.";
      return;
    }
    el("loginMessage").textContent = "Sending secure sign-in link…";
    const result = await client.auth.signInWithOtp({
      email: entered,
      options: { emailRedirectTo: window.location.origin + window.location.pathname }
    });
    el("loginMessage").textContent = result.error
      ? "Could not send the link: " + result.error.message
      : "Sign-in link sent. Open it from the same browser to edit your goals.";
  });

  el("addGoalButton").addEventListener("click", () => {
    if (isOwner()) openGoalDialog(null);
  });

  el("goalForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!isOwner()) return;
    const id = el("goalId").value;
    const previous = id ? goals.find((item) => String(item.id) === id) : null;
    const draft = {
      id: id || "",
      phase: el("goalPhase").value.trim(),
      title: el("goalTitle").value.trim(),
      description: el("goalDescription").value.trim(),
      timeframe: el("goalTimeframe").value.trim(),
      study_schedule: el("goalStudySchedule").value.trim(),
      completed: el("goalCompleted").checked,
      sort_order: previous ? Number(previous.sort_order || 0) : goals.length + 1
    };
    el("goalMessage").textContent = "Saving…";
    try {
      const saved = await persistGoal(draft);
      const position = goals.findIndex((item) => String(item.id) === String(saved.id));
      if (position >= 0) goals[position] = saved;
      else goals.push(saved);
      el("goalDialog").close();
      renderGoals();
      showNotice("Goal saved to the public dashboard.", false);
    } catch (error) {
      el("goalMessage").textContent = "Could not save: " + error.message;
    }
  });

  el("deleteGoalButton").addEventListener("click", async () => {
    const id = el("goalId").value;
    if (!isOwner() || !client || !id || !window.confirm("Delete this goal? This cannot be undone.")) return;
    const result = await client.from("goals").delete().eq("id", id);
    if (result.error) {
      el("goalMessage").textContent = "Could not delete: " + result.error.message;
      return;
    }
    goals = goals.filter((goal) => String(goal.id) !== id);
    el("goalDialog").close();
    renderGoals();
    showNotice("Goal deleted.", false);
  });

  el("editScheduleButton").addEventListener("click", () => {
    if (!isOwner()) return;
    el("scheduleInputs").innerHTML = days.map((day) =>
      "<div class='schedule-input-row'><label for='schedule-" + day + "'>" + day + "</label>" +
      "<input id='schedule-" + day + "' name='" + day + "' maxlength='180' value='" +
      escapeHtml(schedule[day] || "") + "'></div>"
    ).join("");
    el("scheduleMessage").textContent = "";
    el("scheduleDialog").showModal();
  });

  el("scheduleForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!isOwner() || !client) return;
    const nextSchedule = {};
    days.forEach((day) => { nextSchedule[day] = el("schedule-" + day).value.trim(); });
    el("scheduleMessage").textContent = "Saving…";
    const result = await client.from("journey_settings").upsert({
      id: "weekly_schedule",
      value: nextSchedule,
      updated_at: new Date().toISOString()
    });
    if (result.error) {
      el("scheduleMessage").textContent = "Could not save: " + result.error.message;
      return;
    }
    schedule = nextSchedule;
    el("scheduleDialog").close();
    renderSchedule();
    showNotice("Weekly study schedule saved to the public dashboard.", false);
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
      renderGoals();
    });
  });

  document.querySelectorAll("[data-close]").forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = el(button.dataset.close);
      if (dialog) dialog.close();
    });
  });

  loadData();
})();
