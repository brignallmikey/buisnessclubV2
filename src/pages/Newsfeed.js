import React from "react";

import Layout from "../layout/Layout";

import NewsfeedForm from "../components/NewsfeedForm";
import NewsfeedPost from "../components/NewsfeedPost";
import NewsfeedComments from "../components/NewsfeedComments";
import NewsfeedPages from "../components/NewsfeedPages";
import NewsfeedFriendSuggestions from "../components/NewsfeedFriendSuggestions";
import NewsfeedFeed from "../components/NewsfeedFeed";

function Newsfeed() {
  return (
    <Layout>
      <div class="container">
        <div class="row">
          {/* Main Content */}
          <main class="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            <NewsfeedForm />
            <NewsfeedPost />
            <NewsfeedComments />
          </main>

          {/* Left Sidebar */}

          <aside class="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
            <NewsfeedFriendSuggestions />
            <NewsfeedFeed />
          </aside>

          {/*Right Sidebar */}

          <aside class="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
            <NewsfeedPages />
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export default Newsfeed;
