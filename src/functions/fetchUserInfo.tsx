// localStorage에서 access token을 가져와, /api/user/me/에 GET 요청
// 회원 정보 (username, nickname) 불러와 localStorage에 저장 및 return

export async function fetchUserInfo() {
  if (!localStorage.getItem('access')) {
    return null;
  } else {
    try {
      const url = '/api/user/me/';
      const resJson = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
      }).then((res) => res.json());

      //console.log(resJson);
      localStorage.setItem('username', resJson.username);
      localStorage.setItem('nickname', resJson.nickname);

      return resJson;
    } catch (error) {
      return null;
    }
  }
}
