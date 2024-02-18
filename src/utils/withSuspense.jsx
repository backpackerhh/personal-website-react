import React, { Suspense } from "react";

import Loader from "../components/Loader";

const withSuspense = (WrappedComponent) => () => {
  return (
    <Suspense fallback={<Loader />}>
      <WrappedComponent />
    </Suspense>
  );
};

export default withSuspense;
