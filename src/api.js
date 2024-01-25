import axios from 'axios';


// 로그인 요청 함수
const login = async (username_c, password) => {
  
  try {
    const response = await axios.post('http://143.248.197.66:5000/auth/login', { username: username_c, password: password });
    if (response.status === 200){
    console.log('로그인 성공:', response.data);
    return response;
    } else {
      //setIsLoggedIn(false);
      console.log( response.data);
      return response;
    }
  } catch (error) {
    // 오류 처리
    console.error('로그인 오류:', error);
    throw error;
  }
};

export { login };


const download = async (private_key) => {
  
  try {
    const response = await axios.post('/api/files/download', { private_key: private_key });
    if (response.status === 200){
    console.log('다운로드 성공:', response.data);
    return response;
    } else {
      //setIsLoggedIn(false);
      console.log( response.data);
      return response;
    }
  } catch (error) {
    // 오류 처리
    console.error('다운로드 오류:', error);
    throw error;
  }
};

export { download };

//const email = sessionStorage.getItem('email');

//const files_local = [  { name: 'file_name1.pdf', size: '15KB', key:'failed to get upload files table' }];

const setFiles = async () => {
  try{
    const response = await axios.post('http://143.248.197.66:5000/files/find', {email : sessionStorage.getItem('email')}, {
      headers: {
        'Content-Type': 'application/json',
      },   
    });
    if (response.status === 200) {
      sessionStorage.removeItem('files');
      sessionStorage.setItem('files', JSON.stringify(response.data.files));
      window.location.reload();
    } else {
      sessionStorage.removeItem('files');
      //sessionStorage.setItem('files', JSON.stringify(files_local));
      window.location.reload();

    }
    // else {
    //   sessionStorage.removeItem('files');
    //   sessionStorage.setItem('files', JSON.stringify(files_local));
    //   window.location.reload();
    // }

  } catch (error) {
    alert('업로드 목록 불러오기 실패');
    console.error('error',error);
  }
}

export {setFiles};
