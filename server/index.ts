import { useState, useEffect } from "react";
import axios from "axios";

const USER_PUBLIC_KEY =
  "BC1YLhp9Zf6Yykr7V14zxqeoLS1AbsvExpkgMdVVuT3TDniEhD8htJ1";

export default function Login() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      fetchProfile(USER_PUBLIC_KEY);
    }
    fetchData();
  }, []);

  const fetchProfile = async (publicKey: string) => {
    console.log("fetch");
    const data = await axios.get(`/api/profile/${publicKey}`);
    console.log(data?.data);
    setProfile(data?.data);
  };

  return ();
}
