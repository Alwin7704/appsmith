import { routeChanged } from "actions/focusHistoryActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import type { AppsmithLocationState } from "utils/history";

export default function RouteChangeListener() {
  const location = useLocation<AppsmithLocationState>();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(routeChanged(location));
  }, [location.pathname, location.hash]);
  return null;
}
