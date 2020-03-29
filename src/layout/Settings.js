import React, { Fragment } from "react";
import SettingsHeader from "../components/SettingsHeader";
import SettingsSidebar from "../components/SettingsSidebar";
import Layout from "./Layout";

const Settings = props => {
  return (
    <Layout>
      <Fragment>
        <SettingsHeader />

        <div class="container">
          <div class="row">
            <SettingsSidebar />
            <div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
              {props.children}
            </div>
          </div>
        </div>
      </Fragment>
    </Layout>
  );
};

export default Settings;
