import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import InputArea from '../components/InputArea'

require('codemirror/mode/markdown/markdown');
require('codemirror/lib/codemirror.css');
require ('codemirror/theme/material.css')

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to Munaiz123's Markdown Editor.</p>
    <div>
      <InputArea />
    </div>
  </Layout>
)

export default IndexPage


