<template>
    <div class="container-fluid px-0">
        <article class="main-image">
            <section>
                <h1>Stylish Portfolio</h1>
                <span> A sample sub-text </span>
                <button class="btn btn-xl btn-light"> Find Out More</button>
            </section>
        </article>
        <article id="find-more" class="white-section">
            <section>
                <h3>Stylish Portfolio is the perfect theme for your next project!</h3>
                <span> Loren Ipsum dolor sit amet</span>
                <button class="btn btn-xl btn-light"> What We Offer</button>
            </section>
            <aticle>
                <section></section>
            </aticle>
        </article>
        <article id="offers" class="blue-section">
            <section class="container">
                <h2>What We Offer</h2>
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-5 mb-lg-0" v-for="(offer, index) in offers" :key="index">
                        <div class="icon mx-auto">
                            <i class="fas" :class="offer.icon"></i>
                            <h4> {{ offer.title }}</h4>
                            <span> {{ offer.description }} </span>
                        </div>
                    </div>
                </div>
            </section>
        </article>
        <article class="second-image">
            <section>
                <h2> Welcome to <i>your</i><br>next website!</h2>
                <button class="btn btn-xl btn-dark">Recent Projects</button>
            </section>
        </article>
        <article id= "recent-projects" class="white-section">
            <section class="container">
                <h3>Recent Projects</h3>
                <div class="row no-gutters">
                    <div class="col-lg-6" v-for="(project,index) in recentProjects" :key="index">
                        <a href="" class="portfolio-item">
                            <span class="caption">
                                <span class="caption-content">
                                    <h2>{{ project.title }}</h2>
                                    <p>{{ project.description }}</p>
                                </span>
                            </span>
                        </a>

                    </div>
                </div>
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
                    icon: 'fa-mobile',
                    title: 'Responsive',
                    description: 'Looks great on any screen'
                },
                {
                    icon: 'fa-pencil-alt',
                    title: 'Redesigned',
                    description: 'Freshly redesigned for Vue JS'
                },
                {
                    icon: 'fa-thumbs-up',
                    title: 'Favorited',
                    description: 'Millions of users like us'
                },
                {
                    icon: 'fa-question-circle',
                    title: 'Questions?',
                    description: 'We answer all questions'
                }
            ],
            recentProjects: [
                {
                    img: 'gallery01.jpg',
                    title: 'Stationary',
                    description: 'Loren Ipsum dolor sit amet'
                },
                {
                    img: 'gallery02.jpg',
                    title: 'Ice Cream',
                    description: 'Loren Ipsum dolor sit amet'
                },
                {
                    img: 'gallery03.jpg',
                    title: 'Strawberries',
                    description: 'Loren Ipsum dolor sit amet'
                },
                {
                    img: 'gallery04.jpg',
                    title: 'Workspace',
                    description: 'Loren Ipsum dolor sit amet'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    @import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');
    @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
    @import url('https://fonts.googleapis.com/css?family=Cinzel+Decorative|Indie+Flower&display=swap');

    article {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0 10px;

    }

    .btn-xl {
        padding: 20px 35px;
        font-family: serif;
        font-size: 1.25rem;
    }

    .main-image, .second-image {
        min-height: 100vh;
        background-size: cover;
        padding: 0 10px;
        text-align: center;

        h1 {
            font-size: 5rem;
            font-weight: bold;
            margin-bottom: 30px;
            text-shadow: 4px 4px 4px #aaa;
            font-family: 'Cinzel Decorative', cursive;
        }

        h2 {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 30px;
        }

        span {
            display: block;
            padding-bottom: 30px;
            font-size: 1.6rem;
            font-weight: bold;
        }
    }

    .main-image {
        background: url() center center;
    }

    .second-image {
        background: url() center center;
    }

    .white-section {
        padding: 120px 10px;
        background-color: #fff;
        text-align: center;

        h3 {
            font-size: 2rem;
            font-weight: bold;
        }

        span {
            display: block;
            padding-bottom: 30px;
            font-size: 1.25rem;
        }
    }

    .blue-section {
        padding: 120px 10px;
        background-color: #1d809f;
        color: #fff;
        text-align: center;
    }

    h2 {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 50px;
    }

    h4 {
        font-size: 1.6rem;
        padding: 20px;
    }

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 120px;
        background-color: #fff;
        color: #1d809f;
        border-radius: 50%
    }

    i{
        font-size: 2rem;

    }
</style>


