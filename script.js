const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".main-nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

// Site Map / User Flow Modal

const openWorkflow = document.getElementById("openWorkflow");
const openWorkflowLink = document.getElementById("openWorkflowLink");
const closeWorkflow = document.getElementById("closeWorkflow");
const workflowModal = document.getElementById("workflowModal");

const workflowImage = document.getElementById("workflowImage");
const workflowLabel = document.getElementById("workflowLabel");
const workflowCounter = document.getElementById("workflowCounter");

const prevFlow = document.getElementById("prevFlow");
const nextFlow = document.getElementById("nextFlow");

const flows = [
  {
    img: "images/userflow-home.jpg",
    label: "Home"
  },
  {
    img: "images/userflow-recipe-guide.jpg",
    label: "Recipe Guide"
  },
  {
    img: "images/userflow-packages.jpg",
    label: "Packages Offered"
  },
  {
    img: "images/userflow-bake.jpg",
    label: "Bake at Home Sets"
  },
  {
    img: "images/userflow-ingredients.jpg",
    label: "Ingredients"
  },
  {
    img: "images/userflow-contact.jpg",
    label: "Contact Us"
  },
  {
    img: "images/userflow-other-items.jpg",
    label: "Other Items"
  }
];

let currentFlow = 0;

function updateWorkflow() {
  if (!workflowImage || !workflowLabel || !workflowCounter) return;

  workflowImage.src = flows[currentFlow].img;
  workflowLabel.textContent = flows[currentFlow].label;
  workflowCounter.textContent = `${currentFlow + 1}/${flows.length}`;
}

function openWorkflowModal(startIndex = 0) {
  if (!workflowModal) return;

  currentFlow = startIndex;
  updateWorkflow();
  workflowModal.classList.add("show");
}

function closeWorkflowModal() {
  if (!workflowModal) return;

  workflowModal.classList.remove("show");
}

if (openWorkflow) {
  openWorkflow.addEventListener("click", function (e) {
    e.preventDefault();
    openWorkflowModal(0);
  });
}

if (openWorkflowLink) {
  openWorkflowLink.addEventListener("click", function (e) {
    e.preventDefault();
    openWorkflowModal(0);
  });
}

if (closeWorkflow) {
  closeWorkflow.addEventListener("click", closeWorkflowModal);
}

if (nextFlow) {
  nextFlow.addEventListener("click", function () {
    currentFlow = (currentFlow + 1) % flows.length;
    updateWorkflow();
  });
}

if (prevFlow) {
  prevFlow.addEventListener("click", function () {
    currentFlow = (currentFlow - 1 + flows.length) % flows.length;
    updateWorkflow();
  });
}

if (workflowModal) {
  workflowModal.addEventListener("click", function (e) {
    if (e.target === workflowModal) {
      closeWorkflowModal();
    }
  });
}

document.addEventListener("keydown", function (e) {
  if (!workflowModal || !workflowModal.classList.contains("show")) return;

  if (e.key === "Escape") {
    closeWorkflowModal();
  }

  if (e.key === "ArrowRight") {
    currentFlow = (currentFlow + 1) % flows.length;
    updateWorkflow();
  }

  if (e.key === "ArrowLeft") {
    currentFlow = (currentFlow - 1 + flows.length) % flows.length;
    updateWorkflow();
  }
});
// Wireframe Gallery

const wireframePreview = document.getElementById("wireframePreview");
const wireframeModal = document.getElementById("wireframeModal");
const wireframeModalImage = document.getElementById("wireframeModalImage");

const closeWireframe = document.getElementById("closeWireframe");

const prevWireframe = document.getElementById("prevWireframe");
const nextWireframe = document.getElementById("nextWireframe");

const prevWireframeModal = document.getElementById("prevWireframeModal");
const nextWireframeModal = document.getElementById("nextWireframeModal");

const wireframes = [
  "images/wireframe-home.png",
  "images/wireframe-recipe-guide.png",
  "images/wireframe-packages.png",
  "images/wireframe-bake.png",
  "images/wireframe-ingredients.png",
  "images/wireframe-contact.png",
  "images/wireframe-other-items.png"
];

let currentWireframe = 0;

function updateWireframe() {
  if (!wireframePreview || !wireframeModalImage) return;

  wireframePreview.src = wireframes[currentWireframe];
  wireframeModalImage.src = wireframes[currentWireframe];
}

function nextWireframeImage() {
  currentWireframe = (currentWireframe + 1) % wireframes.length;
  updateWireframe();
}

function prevWireframeImage() {
  currentWireframe =
    (currentWireframe - 1 + wireframes.length) % wireframes.length;
  updateWireframe();
}

if (nextWireframe) {
  nextWireframe.addEventListener("click", nextWireframeImage);
}

if (prevWireframe) {
  prevWireframe.addEventListener("click", prevWireframeImage);
}

if (wireframePreview) {
  wireframePreview.addEventListener("click", function () {
    updateWireframe();
    wireframeModal.classList.add("show");
  });
}

if (closeWireframe) {
  closeWireframe.addEventListener("click", function () {
    wireframeModal.classList.remove("show");
  });
}

if (nextWireframeModal) {
  nextWireframeModal.addEventListener("click", nextWireframeImage);
}

if (prevWireframeModal) {
  prevWireframeModal.addEventListener("click", prevWireframeImage);
}

if (wireframeModal) {
  wireframeModal.addEventListener("click", function (e) {
    if (e.target === wireframeModal) {
      wireframeModal.classList.remove("show");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const filter = button.dataset.filter;

      projectItems.forEach((item) => {
        const category = item.dataset.category;

        if (filter === "all" || category === filter) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
});

//photography page
document.addEventListener("DOMContentLoaded", () => {
  const mainPhoto = document.getElementById("mainPhoto");
  const thumbnails = document.querySelectorAll(".photo-thumb");

  if (mainPhoto && thumbnails.length > 0) {
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {

        const newImage = thumbnail.dataset.image;

        mainPhoto.style.opacity = "0";

        setTimeout(() => {
          mainPhoto.src = newImage;
          mainPhoto.style.opacity = "1";
        }, 150);

        thumbnails.forEach((thumb) => {
          thumb.classList.remove("active");
        });

        thumbnail.classList.add("active");
      });
    });
  }
});

//lightbox
document.addEventListener("DOMContentLoaded", () => {

  const photos = document.querySelectorAll(
    ".gallery-photo, .photo-main img"
  );

  const lightbox = document.getElementById("photoLightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const closeButton = document.getElementById("lightboxClose");

  if (!lightbox || !lightboxImage) return;

  // OPEN PHOTO
  photos.forEach((photo) => {
    photo.addEventListener("click", () => {
      lightboxImage.src = photo.src;
      lightboxImage.alt = photo.alt;

      lightbox.classList.add("open");

      document.body.style.overflow = "hidden";
    });
  });


  // CLOSE
  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }


  // X BUTTON
  closeButton.addEventListener("click", closeLightbox);


  // CLICK DARK BACKGROUND
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });


  // ESC KEY
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });

});

//lightbox for storyboard
document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     STORYBOARD VIEW MORE
  ========================= */

  const storyboardToggle =
    document.getElementById("storyboardToggle");

  const extraStoryboards =
    document.querySelectorAll(".extra-storyboard");


  if (storyboardToggle && extraStoryboards.length > 0) {

    storyboardToggle.addEventListener("click", () => {

      const isOpen =
        storyboardToggle.classList.toggle("open");


      extraStoryboards.forEach((item) => {
        item.classList.toggle("show", isOpen);
      });


      storyboardToggle.setAttribute(
        "aria-expanded",
        isOpen
      );


      const toggleText =
        storyboardToggle.querySelector("span");

      if (toggleText) {
        toggleText.textContent =
          isOpen ? "view less" : "view more";
      }

    });

  }



  /* =========================
     STORYBOARD LIGHTBOX
  ========================= */

  const storyboardImages =
    document.querySelectorAll(".storyboard-image");

  const storyboardLightbox =
    document.getElementById("storyboardLightbox");

  const storyboardLightboxImage =
    document.getElementById("storyboardLightboxImage");

  const storyboardLightboxClose =
    document.getElementById("storyboardLightboxClose");


  if (
    storyboardLightbox &&
    storyboardLightboxImage &&
    storyboardLightboxClose
  ) {

    storyboardImages.forEach((image) => {

      image.addEventListener("click", () => {

        storyboardLightboxImage.src = image.src;
        storyboardLightboxImage.alt = image.alt;

        storyboardLightbox.classList.add("open");

        document.body.style.overflow = "hidden";

      });

    });


    function closeStoryboardLightbox() {

      storyboardLightbox.classList.remove("open");

      document.body.style.overflow = "";

    }


    storyboardLightboxClose.addEventListener(
      "click",
      closeStoryboardLightbox
    );


    storyboardLightbox.addEventListener(
      "click",
      (event) => {

        if (event.target === storyboardLightbox) {
          closeStoryboardLightbox();
        }

      }
    );


    document.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key === "Escape" &&
          storyboardLightbox.classList.contains("open")
        ) {
          closeStoryboardLightbox();
        }

      }
    );

  }

});

// mouse script

const canvas = document.getElementById("paint-trail");
const ctx = canvas.getContext("2d");

let W = window.innerWidth;
let H = window.innerHeight;

let currentStroke = null;
const finishedStrokes = [];

let lastMoveTime = 0;


/* =========================
   CANVAS
========================= */

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;

  W = window.innerWidth;
  H = window.innerHeight;

  canvas.width = W * dpr;
  canvas.height = H * dpr;

  canvas.style.width = W + "px";
  canvas.style.height = H + "px";

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);


/* =========================
   START / ADD TO STROKE
========================= */

document.addEventListener("mousemove", (e) => {
  const now = performance.now();

  /*
    If user stopped for a moment,
    start a brand-new swish.
  */
  if (!currentStroke || now - lastMoveTime > 180) {
    finishCurrentStroke(now);

    currentStroke = {
      points: [],
      seed: Math.random() * 1000,
      opacity: 0.70
    };
  }

  const points = currentStroke.points;

  if (points.length > 0) {
    const previous = points[points.length - 1];

    const dist = Math.hypot(
      e.clientX - previous.x,
      e.clientY - previous.y
    );

    if (dist < 5) return;

    /*
      Fast movement = thinner brush.
      Slow movement = broader/wetter brush.
    */
    const width = Math.max(
      150,
      Math.min(300, 250 - dist * 1.3)
    );

    points.push({
      x: e.clientX,
      y: e.clientY,
      width
    });
  } else {
    points.push({
      x: e.clientX,
      y: e.clientY,
      width: 20
    });
  }

  /*
    Don't keep thousands of points.
  */

  lastMoveTime = now;
});


document.addEventListener("mouseleave", () => {
  finishCurrentStroke(performance.now());
});


function finishCurrentStroke(now) {
  if (
    currentStroke &&
    currentStroke.points.length > 2
  ) {
    currentStroke.finishedAt = now;
    finishedStrokes.push(currentStroke);
  }

  currentStroke = null;
}


/* =========================
   GET SMOOTH POINTS
========================= */

function smoothPoints(points) {
  if (points.length < 3) return points;

  const result = [];

  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i + 1];

    result.push({
      x: (p1.x + p2.x) / 2,
      y: (p1.y + p2.y) / 2,
      width: (p1.width + p2.width) / 2
    });
  }

  return result;
}


/* =========================
   BUILD RIBBON
========================= */

function buildRibbon(points) {
  if (points.length < 3) return null;

  const smooth = smoothPoints(points);

  const left = [];
  const right = [];

  for (let i = 0; i < smooth.length; i++) {
    const current = smooth[i];

    const before =
      smooth[Math.max(0, i - 1)];

    const after =
      smooth[Math.min(smooth.length - 1, i + 1)];

    const dx = after.x - before.x;
    const dy = after.y - before.y;

    const length =
      Math.hypot(dx, dy) || 1;

    /*
      Normal/perpendicular direction.
    */
    const nx = -dy / length;
    const ny = dx / length;


    /* -------------------------
       TAPER BEGINNING
    ------------------------- */

    let taper = 1;

    if (i < 6) {
      taper *= i / 6;
    }


    /* -------------------------
       TAPER LIVE END
    ------------------------- */

    const distanceFromEnd =
      smooth.length - 1 - i;

    if (distanceFromEnd < 8) {
      taper *= distanceFromEnd / 8;
    }


    /*
      Slight organic width changes.
    */
    const wobble =
      1 +
      Math.sin(i * 0.8) * 0.06 +
      Math.sin(i * 2.1) * 0.025;

    const halfWidth =
      current.width *
      0.5 *
      taper *
      wobble;


    /*
      Left edge
    */
    left.push({
      x: current.x + nx * halfWidth,
      y: current.y + ny * halfWidth
    });


    /*
      Right edge
    */
    right.push({
      x: current.x - nx * halfWidth,
      y: current.y - ny * halfWidth
    });
  }

  return {
    center: smooth,
    left,
    right
  };
}


/* =========================
   DRAW THE WET SWISH
========================= */

function drawStroke(stroke, fadeAlpha) {
  const ribbon =
    buildRibbon(stroke.points);

  if (!ribbon) return;

  const { left, right, center } = ribbon;

  ctx.save();


  /* =========================
     MAIN PAINT SHAPE
  ========================= */

  ctx.beginPath();

  ctx.moveTo(
    left[0].x,
    left[0].y
  );

  for (let i = 1; i < left.length; i++) {
    ctx.lineTo(
      left[i].x,
      left[i].y
    );
  }

  for (let i = right.length - 1; i >= 0; i--) {
    ctx.lineTo(
      right[i].x,
      right[i].y
    );
  }

  ctx.closePath();

  ctx.fillStyle =
    `rgba(224, 207, 195, ${
      stroke.opacity * fadeAlpha
    })`;

  ctx.fill();


  /* =========================
     INTERNAL WATERY LAYERS
  ========================= */

  ctx.clip();

  /*
    These are NOT separate cursor trails.
    They're texture INSIDE the ribbon.
  */

  for (let j = 0; j < 5; j++) {
    const offset =
      (j - 2) * 13;

    ctx.beginPath();

    for (let i = 1; i < center.length; i++) {
      const p1 = center[i - 1];
      const p2 = center[i];

      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;

      const len =
        Math.hypot(dx, dy) || 1;

      const nx = -dy / len;
      const ny = dx / len;

      const wobble =
        Math.sin(
          i * 0.55 +
          j * 2 +
          stroke.seed
        ) * 4;

      const x =
        p2.x +
        nx * (offset + wobble);

      const y =
        p2.y +
        ny * (offset + wobble);

      if (i === 1) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    /*
      Very subtle internal pigment variation.
    */
    ctx.strokeStyle =
      `rgba(244,236,230,${
        (0.035 + j * 0.008) *
        fadeAlpha
      })`;

    ctx.lineWidth =
      10 + j * 4;

    ctx.lineCap = "butt";

    ctx.stroke();
  }


  /* =========================
     BRUSH GAPS
  ========================= */




  ctx.restore();


  /* =========================
     EDGE WISPS
  ========================= */

  ctx.save();

  ctx.globalAlpha =
    fadeAlpha * 0.22;

  for (let j = 0; j < 3; j++) {
    ctx.beginPath();

    const edge =
      j % 2 === 0
        ? left
        : right;

    const start =
      Math.floor(edge.length * 0.45);

    for (let i = start; i < edge.length; i++) {
      const p = edge[i];

      const drift =
        Math.sin(
          i * 1.3 +
          j * 5 +
          stroke.seed
        ) * 5;

      if (i === start) {
        ctx.moveTo(
          p.x,
          p.y + drift
        );
      } else {
        ctx.lineTo(
          p.x,
          p.y + drift
        );
      }
    }

    ctx.strokeStyle =
      "#e0cfc3";

    ctx.lineWidth =
      1 + j;

    ctx.stroke();
  }

  ctx.restore();
}


/* =========================
   FADE
========================= */

function strokeAlpha(stroke, now) {
  if (!stroke.finishedAt) {
    return 1;
  }

  const age =
    now - stroke.finishedAt;

  /*
    Stay there first.
  */
  if (age < 2200) {
    return 1;
  }

  /*
    Then fade slowly.
  */
  const progress =
    (age - 2200) / 3200;

  return Math.max(
    0,
    1 - progress
  );
}


/* =========================
   ANIMATE
========================= */

function animate(now) {
  /*
    Automatically finish stroke
    when cursor pauses.
  */
  if (
    currentStroke &&
    now - lastMoveTime > 180
  ) {
    finishCurrentStroke(now);
  }


  /*
    IMPORTANT:
    redraw the whole swish once,
    rather than stacking circles.
  */
  ctx.clearRect(
    0,
    0,
    W,
    H
  );


  for (
    let i = finishedStrokes.length - 1;
    i >= 0;
    i--
  ) {
    const alpha =
      strokeAlpha(
        finishedStrokes[i],
        now
      );

    if (alpha <= 0) {
      finishedStrokes.splice(i, 1);
      continue;
    }

    drawStroke(
      finishedStrokes[i],
      alpha
    );
  }


  if (currentStroke) {
    drawStroke(
      currentStroke,
      1
    );
  }


  requestAnimationFrame(
    animate
  );
}

requestAnimationFrame(animate);