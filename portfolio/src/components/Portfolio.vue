<template>
  <div class="container-fluid px-0">
    <article id="app" class="main-image">
      <section>
        <h1>Vue JS</h1>
        <span> A sample sub-text </span>
        <button class="btn btn-xl btn-light" @click="scrollTo('find-more')">
          Find Out More
        </button>
      </section>
    </article>
    <article id="find-more" class="white-section">
      <section>
        <h3>Stylish Portfolio is the perfect theme for your next project!</h3>
        <span> Loren Ipsum dolor sit amet</span>
        <button class="btn btn-xl btn-light" @click="scrollTo('offers')">
          What We Offer
        </button>
      </section>
      <aticle>
        <section></section>
      </aticle>
    </article>
    <article id="offers" class="blue-section">
      <section class="container">
        <h2>What We Offer</h2>
        <div class="row">
          <div
            class="col-lg-3 col-md-6 mb-5 mb-lg-0"
            v-for="(offer, index) in offers"
            :key="index"
          >
            <div class="icon mx-auto">
              <i class="fas" :class="offer.icon"></i>
              <h4>{{ offer.title }}</h4>
              <span> {{ offer.description }} </span>
            </div>
          </div>
        </div>
      </section>
    </article>
    <article class="second-image">
      <section>
        <h2>Welcome to <i>your</i><br />next website!</h2>
        <button
          class="btn btn-xl btn-dark"
          @click="scrollTo('recent-projects')"
        >
          Recent Projects
        </button>
      </section>
    </article>
    <article id="recent-projects" class="white-section">
      <section class="container">
        <h3>Recent Projects</h3>
        <div class="row no-gutters">
          <div
            class="col-lg-6"
            v-for="(project, index) in recentProjects"
            :key="index"
          >
            <a href="" class="portfolio-item">
              <span class="caption">
                <span class="caption-content">
                  <h2>{{ project.title }}</h2>
                  <p class="mb-0">{{ project.description }}</p>
                </span>
              </span>
              <img
                class="image-fluid"
                :src="require('../assets/img/' + project.img)"
              />
            </a>
          </div>
        </div>
      </section>
    </article>

    <article class="blue-section">
      <section class="container">
        <h2>Have a nice day!</h2>
        <button class="btn btn-xl btn-light mr-4" @click="scrollTo('app')">
          Click Me!
        </button>
        <button class="btn btn-xl btn-dark" @click="scrollTo('app')">
          Look at Me!
        </button>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offers: [
        {
          icon: "fa-mobile",
          title: "Responsive",
          description: "Looks great on any screen"
        },
        {
          icon: "fa-pencil-alt",
          title: "Redesigned",
          description: "Freshly redesigned for Vue JS"
        },
        {
          icon: "fa-thumbs-up",
          title: "Favorited",
          description: "Millions of users like us"
        },
        {
          icon: "fa-question-circle",
          title: "Questions?",
          description: "We answer all questions"
        }
      ],
      recentProjects: [
        {
          img: "stationery.jpg",
          title: "Stationery",
          description: "Loren Ipsum dolor sit amet"
        },
        {
          img: "ice-cream.jpg",
          title: "Ice Cream",
          description: "Loren Ipsum dolor sit amet"
        },
        {
          img: "strawberries.jpg",
          title: "Strawberries",
          description: "Loren Ipsum dolor sit amet"
        },
        {
          img: "work-space.jpg",
          title: "Workspace",
          description: "Loren Ipsum dolor sit amet"
        }
      ]
    };
  },
  methods: {
    scrollTo(element) {
      const el = document.querySelector("#" + element);
      el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
};
</script>
