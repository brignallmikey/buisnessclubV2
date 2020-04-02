import React from "react";
import GroupHeader from "../components/group/Header";
import CreateGroupCard from "../components/group/CreateGroupCard";
import GroupCard from "../components/group/GroupCard";
import Layout from "../layout/Layout";

function GroupLanding() {
  return (
    <Layout>
      <GroupHeader />

      <div class="container">
        <div class="row">
          <CreateGroupCard />

          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </div>
      </div>
    </Layout>
  );
}

export default GroupLanding;
