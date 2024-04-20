import React from "react";
import { actions, selectors } from "../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

interface TestProps {
    children: React.ReactNode;
}

const Test = ({ children }: TestProps) => {
    const user = useSelector(selectors.getUserAge);
    const dispatch = useDispatch();
    const { deleteUser } = actions;

    return (
        <div>
            <button onClick={() => dispatch(deleteUser())}>Usuń</button>

            {user}
        </div>
    );
};

export default Test;
