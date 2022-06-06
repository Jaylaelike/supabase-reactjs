import './index.css';
import Auth from './Auth';
import Acount from './Acount';
import { useEffect, useState } from "react";
import { supabase } from './supabaseClient';

function App() {

  const [session, setSession] = useState(null);
  
  useEffect(()=>{
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session)=> {
    setSession(session)
    })
  }, []);

  return (
   <div className="container" style={{padding: '50px 0 100px 0'}}>
  
   {!session ? <Auth/> : <Acount key={session.user.id} session={session}/>}
   </div>
  );
  

}


export default App;
