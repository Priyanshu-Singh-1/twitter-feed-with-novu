'use client';

import { useState } from "react"
import LoginComponent from "./components/login.components";
import FeedComponent from "./components/feed.components";
import { db } from "./helper/db";

export default function Home() {
  const [login, setLogin] = useState("")
  return (
    <>
      {login ? <FeedComponent db={db} login={login} /> : <LoginComponent setLogin={setLogin} />}
    </>
  )
}

export const getServerSideProps = () => {
  return {
    props: {
      db
    }
  }
}