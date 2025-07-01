import React,{useState , useEffect} from 'react';
import styles from '../styles/Dashboard.module.scss';
import { useNavigate } from 'react-router-dom';
import {type User} from '../components/types';

const Dashboard:React.FC = () => {
  const [user , setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if(!storedUser){
        navigate("/auth");
        return;
    }
    setUser(JSON.parse(storedUser));
  } , [navigate])

  if(!user) return <p>در حال بارگذاری...</p>; 

  return (
    <div className={styles.container}>
        <h1>Welcome to the Dashboard</h1>
        <p>خوش آمدی، {user.name.first} {user.name.last}</p>
    </div>
  );
};

export default Dashboard;