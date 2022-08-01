import actionTypes from "./constants";
import QuestionsApiService from "../../services/questions-api-service";

const fetchQuestionsRequest = () => ({
  type: actionTypes.FETCH_QUESTIONS_REQUEST,
});

const fetchQuestionsSuccess = (questions) => ({
  type: actionTypes.FETCH_QUESTIONS_SUCCESS,
  payload: questions,
});

const fetchQuestionsFailure = (error) => ({
  type: actionTypes.FETCH_QUESTIONS_FAILURE,
  payload: error?.message ?? error,
});

export const fetchNewQuestionsAction = () => {
  return async (dispatch) => {
    dispatch(fetchQuestionsRequest());
    try {
      const questions = await QuestionsApiService.getQuestions();

      dispatch(fetchQuestionsSuccess(questions));
    } catch (e) {
      dispatch(fetchQuestionsFailure(e));
    }
  };
};
