import React, { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(false);
  const [meetups, setMeetups] = useState([]);

  const fetchAllData = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://react-http-b3bb5-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    );

    const data = await response.json();

    const newMeetups = [];

    for (let key in data) {
      console.log(data[key].title);
      newMeetups.push({
        id: key,
        title: data[key].title,
        image: data[key].image,
        address: data[key].address,
        description: data[key].description,
      });
    }

    setIsLoading(false);
    setMeetups(newMeetups);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
}

export default AllMeetups;
