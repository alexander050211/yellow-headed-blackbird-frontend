// localStorage에서 access token을 가져와, /api/diaries/에 GET 요청
// 회원이 가진 밤샘 기록(Diaries) 목록 요청

export async function getDiaries() {
  if (!localStorage.getItem('access')) {
    return null;
  } else {
    try {
      const url = '/api/diaries/';
      const resJson = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
      }).then((res) => res.json());

      //console.log(resJson);

      return resJson;
    } catch (error) {
      return null;
    }
  }
}

// localStorage에서 access token을 가져와, /api/diaries/[id]에 GET 요청
// 밤샘 기록(Diaries) 중 id를 통해 해당하는 항목 요청

export async function getDiary(id: number) {
  if (!localStorage.getItem('access')) {
    return null;
  } else {
    try {
      const url = `/api/diaries/${id}`;
      const resJson = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
      }).then((res) => res.json());

      //console.log(resJson);

      return resJson;
    } catch (error) {
      return null;
    }
  }
}
