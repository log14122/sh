import { TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from'./modules/user';
const store = configureStore({
    reducer: {
        user: userReducer
    }
});
//从store 本身推出Rootstate'和AppDispatch'类型
export type RootState = ReturnType<typeof store.getState>
//推断出类型:fposts:Postsstate,comments:CommentsState,users:UsersState}
export type AppDispatch = typeof store.dispatch
//在整个应用程序中使用，而不总简单的useDispatch'和useSelector
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;