import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

import * as S from "./addEvent.styles";
import "react-toastify/dist/ReactToastify.css";

const AddEventPage = () => {
  const [values, setValues] = useState({
    name: "",
    performers: "",
    venue: "",
    address: "",
    date: "",
    time: "",
    description: "",
  });

  const router = useRouter();

  const hasEmptyFields = (values) => {
    const DoesItContainEmptyFields = Object.values(values).some(
      (value) => value === ""
    );

    return DoesItContainEmptyFields;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const DoesItContainEmptyFields = hasEmptyFields(values);

    if (DoesItContainEmptyFields) {
      toast.error(
        "All form fields are obligatory. Please check the form for empty fields.",
        {
          position: toast.POSITION.BOTTOM_CENTER,
        }
      );
    }

    const res = await fetch(`${API_URL}/events`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      toast.error(res.statusText, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      const eventInfo = await res.json();
      router.push(`/events/${eventInfo.slug}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Layout>
      <Link href="/events">
        <a>
          <FaAngleDoubleLeft /> Go back to Events
        </a>
      </Link>
      <h1>Add event</h1>
      <S.AddEventForm onSubmit={handleSubmit}>
        <div className="grid">
          <div>
            <label htmlFor="name">Event Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="performers">Performers</label>
            <input
              type="text"
              name="performers"
              id="performers"
              value={values.performers}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="venue">Venue</label>
            <input
              type="text"
              name="venue"
              id="venue"
              value={values.venue}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={values.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              value={values.date}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="time">Time</label>
            <input
              type="text"
              name="time"
              id="time"
              value={values.time}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="description">Event Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <input type="submit" value="Add Event" className="btn" />
      </S.AddEventForm>
      <ToastContainer />
    </Layout>
  );
};

export default AddEventPage;
