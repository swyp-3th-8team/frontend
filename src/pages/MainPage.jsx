import { useEffect, useState } from "react";
import { MainPageProvider } from "./MainPageContext";
import GoalPanel from "../components/Modal/GoalPanel";
import MissionPanel from "../components/Mandalart/MissionPanel";
import MissionList from "../components/Lists/MissionList";
import GoalList from "../components/Lists/GoalList";
import Goal from "../components/Mandalart/Goal";
import Mission from "../components/Mandalart/Mission";
import GoalDetail from "../components/Modal/GoalDetail";
import Modal from "../components/Modal/Modal";
import styles from "./MainPage.module.scss";
import axios from "axios";
import { SERVER_URL } from "../api/ServerUrl";

const createDefaultGoal = () => ({
  content: "",
  isCompleted: false,
});

const createDefaultMission = () => ({
  content: "",
  goalList: new Array(8).fill(null).map(createDefaultGoal),
});

export default function MainPage() {
  const [missionList, setMissionList] = useState(() =>
    new Array(8).fill(null).map(createDefaultMission)
  );
  const [missionTitle, setMissionTitle] = useState("");
  const [selectedMissionIndex, setSelectedMissionIndex] = useState(null);
  const [selectedMissionList, setSelectedMissionList] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showGoalPanel, setShowGoalPanel] = useState(false);
  const [goalDetailTexts, setGoalDetailTexts] = useState(
    new Array(8).fill(null).map(() => "")
  ); //GoalDetail <textarea> 상태값을 각 Goal에 대한 상태를 배열로 초기화
  const [isGoalDetailEditing, setIsGoalDetailEditing] = useState(false); //GoalDetail창 전체
  const [focusedGoalIndex, setFocusedGoalIndex] = useState(null);
  const [isMissionListEditing, setIsMissionListEditing] = useState(false);
  const userId = sessionStorage.getItem("userId");
  const [missionTitleId, setMissionTitleId] = useState("");
  const [missionPanelId, setMissionPanelId] = useState("");
  const [goalPanelId, setGoalPanelId] = useState("");

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/members/${userId}/title`)
      .then((res) => {
        setMissionTitleId(res.data.id);
        setMissionTitle(res.data.title);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${SERVER_URL}/members/${userId}/main`)
      .then((res) => {
        setMissionPanelId(res.data?.[0].id);
        res.data[0].missionList.forEach((missionContent, index) => {
          if (missionContent) {
            setMissionList((prevMissionList) => {
              const updatedMissionList = [...prevMissionList];
              updatedMissionList[index].content = missionContent;
              return updatedMissionList;
            });
          }
        });
      })
      .catch((err) => console.log(err));

    //axios
    //  .get(`${SERVER_URL}/members/${userId}/details`)
    //  .then((res) => console.log(res.data[0]));

    axios
      .get(`${SERVER_URL}/members/${userId}/details`)
      .then((res) => {
        setGoalPanelId(res.data?.[0].id); //로직에 추가해야 함
        for (let i = 0; i < res.data.length; i++) {
          const missionIndex = res.data[i].missionIndex;
          const goalList = res.data[i].goalList;
          const goalTexts = res.data[i].goalText; // goalText 배열 가져오기
          if (missionIndex >= 0 && missionIndex < missionList.length) {
            setMissionList((prevMissionList) => {
              const updatedMissionList = [...prevMissionList];
              updatedMissionList[missionIndex].goalList = goalList.map(
                (goal) => ({
                  content: goal,
                  isCompleted: false, // 기본값 설정 혹은 서버에서 받은 값으로 업데이트
                })
              );
              return updatedMissionList;
            });
            if (goalTexts && Array.isArray(goalTexts)) {
              for (let j = 0; j < goalTexts.length; j++) {
                const goalText = goalTexts[j];
                if (goalText !== undefined) {
                  setGoalDetailTexts((prevGoalDetailTexts) => {
                    const updatedGoalDetailTexts = [...prevGoalDetailTexts];
                    if (!updatedGoalDetailTexts[missionIndex]) {
                      updatedGoalDetailTexts[missionIndex] = new Array(8).fill(
                        ""
                      );
                    }
                    updatedGoalDetailTexts[missionIndex][j] = goalText;
                    return updatedGoalDetailTexts;
                  });
                }
              }
            }
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const onFocusChange = (index) => {
    setFocusedGoalIndex(index); // focus 상태 변경 시 focusedGoalIndex 업데이트
  };

  const openModal = (index) => {
    setSelectedMissionIndex(index);
    setIsModalOpen(true);
    setIsGoalDetailEditing(true);
  };

  const closeModals = () => {
    setIsModalOpen(false);
    setIsGoalDetailEditing(true);
  };

  return (
    <MainPageProvider>
      <div className={styles.mainWrapper}>
        <div className={styles.content}>
          <Goal
            goalList={missionList[0].goalList}
            missionList={missionList[0].content}
            onClick={() => {
              if (!isMissionListEditing) {
                openModal(0);
              } else {
                alert("수정된 목표를 저장해 주세요.");
              }
            }}
          />
          <Goal
            goalList={missionList[1].goalList}
            missionList={missionList[1].content}
            onClick={() => {
              if (!isMissionListEditing) {
                openModal(1);
              } else {
                alert("수정된 목표를 저장해 주세요.");
              }
            }}
          />
          <Goal
            goalList={missionList[2].goalList}
            missionList={missionList[2].content}
            onClick={() => {
              if (!isMissionListEditing) {
                openModal(2);
              } else {
                alert("수정된 목표를 저장해 주세요.");
              }
            }}
          />
          <Goal
            goalList={missionList[3].goalList}
            missionList={missionList[3].content}
            onClick={() => {
              if (!isMissionListEditing) {
                openModal(3);
              } else {
                alert("수정된 목표를 저장해 주세요.");
              }
            }}
          />
          <Mission
            missionList={missionList}
            missionTitle={missionTitle}
            onClick={() => setSelectedMissionList()}
          />
          <Goal
            goalList={missionList[4].goalList}
            missionList={missionList[4].content}
            onClick={() => {
              if (!isMissionListEditing) {
                openModal(4);
              } else {
                alert("수정된 목표를 저장해 주세요.");
              }
            }}
          />
          <Goal
            goalList={missionList[5].goalList}
            missionList={missionList[5].content}
            onClick={() => {
              if (!isMissionListEditing) {
                openModal(5);
              } else {
                alert("수정된 목표를 저장해 주세요.");
              }
            }}
          />
          <Goal
            goalList={missionList[6].goalList}
            missionList={missionList[6].content}
            onClick={() => {
              if (!isMissionListEditing) {
                openModal(6);
              } else {
                alert("수정된 목표를 저장해 주세요.");
              }
            }}
          />
          <Goal
            goalList={missionList[7].goalList}
            missionList={missionList[7].content}
            onClick={() => {
              if (!isMissionListEditing) {
                openModal(7);
              } else {
                alert("수정된 목표를 저장해 주세요.");
              }
            }}
          />
        </div>
        {selectedMissionList !== null && (
          <MissionPanel
            titleId={missionTitleId}
            missionPanelId={missionPanelId}
            title={missionTitle}
            onTitleChange={setMissionTitle} //title 변경 시 상태 업데이트
            onClose={() => setSelectedMissionList(null)}
            isMissionListEditing={isMissionListEditing}
            setIsMissionListEditing={setIsMissionListEditing}
            missionList={missionList} //axios
          >
            <MissionList
              missionList={missionList}
              setMissionList={setMissionList}
            />
          </MissionPanel>
        )}
      </div>
      {isModalOpen && (
        <Modal onClose={closeModals} className={styles.mainPageModal}>
          <div className={styles.content}>
            <GoalDetail
              missionList={missionList}
              selectedMissionIndex={selectedMissionIndex}
              goalDetailText={goalDetailTexts?.[selectedMissionIndex]}
              setGoalDetailText={(text) => {
                const updatedTexts = [...goalDetailTexts];
                updatedTexts[selectedMissionIndex] = text;
                setGoalDetailTexts(updatedTexts);
              }}
              onClick={() => setShowGoalPanel(true)}
              isGoalDetailEditing={isGoalDetailEditing}
              focusedGoalIndex={focusedGoalIndex}
            />
            {showGoalPanel && (
              <GoalPanel
                goalPanelId={goalPanelId}
                missionTitle={missionTitle}
                title={missionList?.[selectedMissionIndex]?.content}
                onClose={() => setShowGoalPanel(false)}
                goalList={missionList?.[selectedMissionIndex]?.goalList} //axios
                goalDetailText={
                  goalDetailTexts?.[selectedMissionIndex] ||
                  new Array(8).fill(null).map(() => "")
                } //axios
                selectedMissionIndex={selectedMissionIndex}
              >
                <GoalList
                  missionList={missionList}
                  missionIndex={selectedMissionIndex}
                  setMissionList={setMissionList}
                  onFocusChange={onFocusChange}
                />
              </GoalPanel>
            )}
          </div>
        </Modal>
      )}
    </MainPageProvider>
  );
}
