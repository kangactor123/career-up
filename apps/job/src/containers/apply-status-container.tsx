import React from "react";

import { useDispatch, useSelector } from "react-redux";
import useAuth0Client from "../hooks/use-auth0-client";
import { AppDispatch, RootState } from "../redux/create";
import { useCallback } from "react";
import { done, fail, start } from "../redux/modules/applyStatus";
import { getApplyStatus } from "../apis";
import ApplyStatus from "../components/apply-status";

const ApplyStatusContainer: React.FC = () => {
  const auth0Client = useAuth0Client();
  const dispatch = useDispatch<AppDispatch>();

  const applyStatus = useSelector((state: RootState) => state.applyStatus.data);

  const fetchApplyStatus = useCallback(async () => {
    try {
      dispatch(start());
      const token = await auth0Client.getTokenSilently();
      const applyStatus = await getApplyStatus(token);
      dispatch(done(applyStatus));
    } catch (error) {
      dispatch(fail(error));
    }
  }, []);
  return (
    <ApplyStatus
      applyStatus={applyStatus}
      fetchApplyStatus={fetchApplyStatus}
    />
  );
};

export default ApplyStatusContainer;
