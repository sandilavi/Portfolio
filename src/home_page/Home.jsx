import React from 'react'
import Navigation from '../components/navigation_bar/Navigation'
import Intro from '../components/introduction/Intro'
import About from '../components/about_me/About'
import Blogs from '../components/my_blogs/Blogs'
import Projects from '../components/my_projects/Projects'
import Contacts from '../components/contact_me/Contacts'

export default function Home() {
  return (
    <div>
      <Navigation/>
      <Intro/>
      <About/>
      <Blogs/>
      <Projects/>
      <Contacts/>
    </div>
  )
}
