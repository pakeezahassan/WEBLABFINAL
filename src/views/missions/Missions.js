import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMissionsAction } from "../../redux/slices/actions/missions.action";

export const Missions = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(getMissionsAction());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>Error: {error}</p>; 
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((mission, index) => (
            <tr key={index}>
              {" "}
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                <button className="bg-blue-600 text-white px-4 py-2">
                  Join Mission
                </button>
              </td>
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan="3">No missions available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
