<template>
  <Section label="Experience">
    <div class="flex-col-standard">
      <ExperienceCard v-for="(item, i) in data" :key="i" :data="item" />

      <a href="resume.pdf" target="_blank" class="btn-large">See Full Resume</a>
    </div>
  </Section>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

// ------------------------ Props

// ------------------------ Variables

const data = [
  {
    years: "2013 - Now",
    roles: {
      main: {
        title: "Principle Developer",
        years: "2023 - Now",
      },
      other: [
        {
          title: "Senior Developer",
          years: "2014 - 2022",
        },
        {
          title: "Junior Developer",
          years: "2013 - 2014",
        },
      ],
    },
    company: "Control Concepts, Inc.",
    url: "https://www.controlconcepts.net",
    items: [
      {
        content: "Author of dozens of C#, Java, Python, & Lua modules for complete control of third-party manufacturer products including displays, codecs, DSP's and more.",
        link: null,
      },
      {
        content: "Creator of web-based front-end for Crestron room configuration utility module.",
        link: {
          title: "CCI Crestron Configuration Suite",
          url: "https://controlconcepts.net/product/cci-configuration-lite-suite-by-control-concepts-v1-3-0/",
        },
      },
      {
        content: "Sole developer of web app to allow for quickly generating the JSON config file needed for Zoom Room control profiles.",
        link: {
          title: "CCI Zoom Room Profile Maker",
          url: "https://controlconcepts.net/zoom/",
        },
      },
      {
        content: "Primary developer of web app to allow for quickly generating the XML config file needed for Crestron Home extension drivers.",
        link: null,
      },
      {
        content: "Sole developer of complete module suite (including dozens of components) to allow for linking together Crestron Home and Crestron Simpl Windows.",
        link: {
          title: "CCI Crestron Home Bridge",
          url: "https://controlconcepts.net/product/cci-crestron-home-bridge-module-lite-suite/",
        },
      },
      {
        content: "Sole developer of internal cross-platform Electron application to simplify and speed up the generation of cost/effort assessments for new projects.",
        link: null,
      },
      {
        content: "Sole developer of an internally-used Python tool to automate common tasks such as new project generation, module packaging, text/file replacement and more.",
        link: null,
      },
      {
        content: "Developer for numerous large-scale AV integration projects, including the sole developer on the largest single project in company history. Responsibilities include project management, custom touchpanel design, control system programming, commissioning support, detailed control specifications/UI wireframes at project start and step-by-step user manuals at project end.",
        link: null,
      },
      {
        content: "Trainer and mentor to junior developers.",
        link: null,
      },
      {
        content: "Administrator of key infrastructure. Responsible for building, configuring and managing several internal servers including Crestron VC-4, Crestron Fusion, Web Server, Dev servers and more.",
        link: null,
      },
    ],
  },

  {
    years: "2005 - 2012",
    roles: {
      main: {
        title: "Sales Admin Supervisor",
        years: "2009 - 2012",
      },
      other: [
        {
          title: "Sales Admin",
          years: "2005 - 2009",
        },
      ],
    },
    company: "RTS Unified Communications",
    url: "https://www.solutionzinc.com/about-rts-solutionz",
    items: [
      {
        content: "Coordinated the output of 100+ client proposals/bid packages per month.",
        link: null,
      },
      {
        content: "Created detailed monthly sales reports for Sales Manager and CEO.",
        link: null,
      },
      {
        content: "Supervised the daily activities of two Sales Administrators.",
        link: null,
      },
      {
        content: "Updated and maintained company website, press releases and blog posts.",
        link: null,
      },
      {
        content: "Assisted in design of new company logos and letterheads.",
        link: null,
      },
      {
        content: "Generated PowerPoint sales presentations and marketing materials.",
        link: null,
      },
      {
        content: "Authored 50+ page user manual for new company software.",
        link: null,
      },
      {
        content: "Created and maintained procedural checklists for new departmental hires.",
        link: null,
      },
      {
        content: "Trained multiple members of support staff in various departments.",
        link: null,
      },
    ],
  },
];

// ------------------------ Computed

// ------------------------ Functions

// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
