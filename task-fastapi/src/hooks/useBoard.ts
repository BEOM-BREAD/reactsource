import { useEffect, useState } from "react";
import type { BoardComment } from "../types/board";
import { getBoard, getBoardComments } from "../apis/taskApi";

const useBoard = (id: string | undefined) => {
  const [board, setBoard] = useState<BoardComment | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // id 가 없는 경우
        if (!id) return;

        // 서버로 데이터 요청
        const serverData = await getBoard(id);
        const serverCommentData = await getBoardComments(id);

        setBoard({
          userId: serverData.userId,
          id: serverData.id,
          title: serverData.title,
          body: serverData.body,
          comments: serverCommentData,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return { board, loading };
};

export default useBoard;
