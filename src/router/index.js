import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/Home"
import Meetups from "@/components/meetup/Meetups"
import CreateMeetup from "@/components/meetup/CreateMeetup"
import Profile from "@/components/User/Profile"
import Signup from "@/components/User/Signup"
import Signin from "@/components/User/Signin"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/meetups",
      component: Meetups
    },
    {
      path: "/meetup/new",
      component: CreateMeetup
    },
    {
      path: "/profile",
      component: Profile
    },
    {
      path: "/signup",
      component: Signup
    },
    {
      path: "/signin",
      component: Signin
    }
  ],
  mode: "history"
})
