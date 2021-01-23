import React, { useCallback } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadChapter } from "../redux/app-actions";

function Chapter() {
  const book = useSelector((state) => state.input);
  return (
    <>
      <ListGroup className="h-100 shadow-lg bg-white">
        {book.map((item) => (
          <ChatpterItem {...item} key={item.sno} />
        ))}
      </ListGroup>
    </>
  );
}

function ChatpterItem(props) {
  const dispatch = useDispatch();
  const serialNo = useSelector((state) => state.chapterIdx);
  const { chaptertitle, sno } = props;
  const onNavigateToChapter = useCallback(() => {
    dispatch(loadChapter(sno));
  }, [dispatch, sno]);
  return (
    <ListGroup.Item
      style={{ cursor: "pointer" }}
      onClick={onNavigateToChapter}
      active={sno === serialNo}
    >
      {chaptertitle}
    </ListGroup.Item>
  );
}

export default Chapter;
