import Footer from "../Footer.js";
import ListContainer from "../ListContainer.js";

// hook 사용시 주의사항
// 1. 최상위에서 호출되어야 한다
// 2. 오직 React함수에서만 hook을 호출해야 한다.

function Issue() {
  return (
    <>
      <ListContainer />
      <Footer />
    </>
  );
}

export default Issue;
