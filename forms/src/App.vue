<template>
    <div class="container">
        <div class="row">
            <my-animation></my-animation>
        </div>
        <hr>
        <br> <br>
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1 v-highlight:background.delayed="'red'"> File a Complaint! </h1>
                    <h2 v-highlight="'purple'"> Custom Global directive example </h2>
                    <h3 v-local-highlight:background.delayed.blink="{mainColor: 'lightblue', secondColor: 'orange', localDelay: 500}"> Custom Local directive example </h3>
                    <p v-text="'Some sample text'"></p>
                    <p v-html="'<strong> Some strong text </strong>'"></p>
                    <hr>
                    <h1> Forms </h1>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model.lazy.trim="userData.email"
                        >
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model="userData.password"
                        >
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model.number="userData.age"
                        >
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="message"
                    ></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="sendMail"
                                > Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="sendMail"
                            > Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="gender"
                        > Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="gender"
                        > Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedPriority"
                    >
                        <option 
                            v-for="priority in priorities" 
                            :key="priority.id" 
                            :selected="priority == 'Medium'"
                        > {{ priority }}</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <my-switch v-model="dataSwitch"></my-switch>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Age: {{ userData.age }}</p>
                        <p style="white-space:pre">Message: {{ message}}</p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="item in sendMail" :key="item.id"> {{ item}}</li>
                        </ul>
                        <p>Gender: {{gender}}</p>
                        <p>Priority: {{ selectedPriority }}</p>
                        <p>Switched: {{ dataSwitch }}</p>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <h1> Filters & Mixins </h1>
        <div class="row">
            <my-filters></my-filters>
        </div>
        <hr>
        <div class="row">
            <my-list></my-list>
        </div>
        <hr>
        <div class="row">
            <button class="btn btn-primary"
                @click="selectedComponent == 'my-success' ? selectedComponent='my-danger': selectedComponent='my-success'"
            >
                Toggle
            </button>
            <br><br>
            <transition name="fade" mode="out-in">
                <component :is="selectedComponent"></component>
            </transition>
            <hr>
            <button class="btn btn-primary" @click="addItem"> Add Item </button>
            <br>
            <ul class="list-group">
                <transition-group name="slide">
                    <li 
                        class="list-group-item"
                        v-for="(number, index) in sampleNumbers"
                        @click="removeItem(index)"
                        style="cursor: pointer"
                        :key="number"
                    >
                        {{ number }}
                    </li>
                </transition-group>
            </ul>
        </div>
    </div>
</template>

<script>
    import Switch from './Switch.vue'
    import Filters from './Filters.vue'
    import MyList from './MyList.vue'
    import Animation from './Animation.vue'
    import Success from './SuccessAlert.vue'
    import Danger from './DangerAlert.vue'
    export default {
        data() {
            return {
                userData: {
                    email: '',
                    password: '',
                    age: 27
                },
                message: 'A sample Text',
                sendMail: [],
                gender: 'Male',
                selectedPriority: 'High',
                priorities: ['High', 'Medium', 'Low'],
                dataSwitch: true,
                isSubmitted: false,
                selectedComponent: 'my-success',
                sampleNumbers: [1,2,3,4,5,6,7,8,9]
            }
        },
        components: {
            mySwitch: Switch,
            myFilters: Filters,
            myList: MyList,
            myAnimation: Animation,
            myDanger: Danger,
            mySuccess: Success
        },
        directives: {
            'local-highlight': {
                bind(el, binding, vnode, oldnode) {
                    var delay = 0;
                    if (binding.modifiers['delayed']) {
                        delay = 3000
                    }
                    if (binding.modifiers['blink']) {
                        let mainColor = binding.value.mainColor
                        let secondColor = binding.value.secondColor
                        let currentColor = mainColor
                        setTimeout(() => {
                            el.style.color = 'Blue'
                            setInterval(()=> {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor
                                if(binding.arg == 'background') {
                                    el.style.backgroundColor = currentColor
                                } else {
                                    el.style.color = currentColor
                                }
                            }, binding.value.localDelay)
                        }, delay)

                    } else {
                        setTimeout(() => {
                        if(binding.arg == 'background') {
                            el.style.backgroundColor = binding.value
                        } else {
                            el.style.color = binding.value
                        }
                    }, delay)
                    }
                }
            }
        },
        methods: {
            submitted() {
                this.isSubmitted = true;
            },
            addItem() {
                const pos = Math.floor(Math.random() * this.sampleNumbers.length);
                this.sampleNumbers.splice(pos, 0, this.sampleNumbers.length + 1)
            },
            removeItem(index) {
                this.sampleNumbers.splice(index, 1);
            }
        }
    }
</script>

<style>

</style>
