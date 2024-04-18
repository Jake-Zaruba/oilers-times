import { useContext } from "react";
import { Context } from "../context/AuthContext";
import PollsComponent from "../components/polls/PollsComponent";

export default function Polls() {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <>
      <PollsComponent />
    </>
  );
}
