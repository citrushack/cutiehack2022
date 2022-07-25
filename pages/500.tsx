import React from "react";
import { Page } from "@/components/Page/Page";
import styles from "../styles/Home.module.css";

export default function error500() {
  return (
    <Page>
      <section className="p-16 flex flex-col justify-center items-center text-center">
        <h1>500</h1>
        <p>
          Uh oh. Something broke on our end. Check back later.
        </p>
      </section>
    </Page>
  );
}
