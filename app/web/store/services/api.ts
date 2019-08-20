import fetch from "../../helpers/callAPI";

export function getCourseware(payload: any): any {
  fetch("GET_COURSEWARES", payload).then(resp => {
    console.log(resp);
  });
}
