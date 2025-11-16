import axios from "axios";
import type { AxiosResponse } from "axios";

const API_URL = "http://localhost:3000";

// Define the type of data you want to send
interface RegisterBody {
  name: string;
  email: string;
  password: string;
}

interface LoginBody {
  email: string;
  password: string;
}

// Define the expected response type
interface RegisterResponse {
  status: string;
  token: string;
  message: string;
}

interface NoteResponse {
  status: string;
  message: string;
  noteId?: string;
}
interface getNoteInt {
  data: {
      status: string;
  note:string
  }

}

interface allNotes {
  status: string;
  notes: []
}



// for register
export async function sendPost(data?: RegisterBody) {
  const payload: RegisterBody = data!;

  try {
    const res: AxiosResponse<RegisterResponse> = await axios.post(
      API_URL+"/register",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Test-Header": "myValue",
        },
      }
    );

    return res.data;

  
  } catch (err: any) {
    console.log("request failed");
    
  }
}


export async function sendLogin(data?: LoginBody) {
  const payload: LoginBody = data!;

  try {
    const res: AxiosResponse<RegisterResponse> = await axios.post(
      API_URL+"/login",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Test-Header": "myValue",
        },
      }
    );

    return res.data;

  
  } catch (err: any) {
    console.log("request failed");
    
  }
}


export async function getMe(token:string) {
  
  try {
    const res: AxiosResponse<RegisterResponse> = await axios.get(
      API_URL+"/me",
      {
        headers: {
          "Content-Type": "application/json",
          "X-Test-Header": "myValue",
          "token": token
        },
      }
    );

    return res.data;

  
  } catch (err: any) {
    console.log("request failed");
    
  }
}

export async function createNote(content:string, token:string) {
  
  const payload = {content};

  
  try {
    const res: AxiosResponse<NoteResponse> = await axios.post(
      API_URL+"/newNote",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Test-Header": "myValue",
          "token": token
        },
      }
    );

    return res.data;

  
  } catch (err: any) {
    console.log("request failed");
    
  }

}

export async function getNote(token:string, noteId:string ){
  const payload = {noteId};
  console.log(payload, noteId, token);

  
  try {
    const res: getNoteInt = await axios.post(
      API_URL+"/getNote",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Test-Header": "myValue",
          "token": token
        },
      }
    );
//  console.log(res.data.note);
    return res.data.note;

  
  } catch (err) {
    console.log("request failed"+err);
    
  }

}

export async function editNote(token:string, noteId:string, content:string ){
  const payload = {noteId, content};
  // console.log(payload, noteId);

  
  try {
    const res: getNoteInt = await axios.post(
      API_URL+"/editNote",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Test-Header": "myValue",
          "token": token
        },
      }
    );
//  console.log(res.data.note);
    return res.data.status;

  
  } catch (err) {
    console.log("request failed"+err);
    
  }

}

export async function getAllNotes(token:string) {
  
  try {
    const res: AxiosResponse<allNotes> = await axios.get(
      API_URL+"/getAllNotes",
      {
        headers: {
          "Content-Type": "application/json",
          "X-Test-Header": "myValue",
          "token": token
        },
      }
    );

    return res.data;

  
  } catch (err: any) {
    console.log("request failed");
    
  }
  
}