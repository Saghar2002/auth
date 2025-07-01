import React,{useState} from 'react';
import styles from '../styles/Auth.module.scss';
import Input from '../components/Input';
import Button from '../components/Button';
import { type RandomUserResponse ,type User } from '../components/types';
import { useNavigate } from 'react-router-dom';

const validatePhone = (number: string): boolean => /^(\+98|0)?9\d{9}$/.test(number);

const Auth:React.FC = () => {

    const [phone , setPhone] = useState<string>("");
    const [error , setError] = useState<string>("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        setError("");
        if (!validatePhone(phone)) {
            setError("شماره معتبر نیست")
            return;
        }
        try {
           const res =await fetch("https://randomuser.me/api/?results=1&nat=us");
           const data: RandomUserResponse = await res.json();
           const user: User = data.results[0];

           localStorage.setItem("user" , JSON.stringify(user));
           navigate("/dashboard");
        } catch {
            setError("مشکلی پیش آمد، دوباره تلاش کنید");
        }
    };

  return (
    <div className={styles.container}>
    <h1>ورود</h1>
    <Input
      placeholder='شماره موبایل'
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      error={error}
    />
    <Button onClick={handleLogin}>ورود</Button>
    </div>
  );
};

export default Auth;