import React from 'react';
import { shallow, mount } from 'enzyme';
import Status from '../component/Status';

describe(("<Status/> component"), () => {
    let wrapper;

    beforeEach(() => {
        const board = ['', '', '', '', '', '', '', '', ''];
        wrapper = shallow(<Status currentPlayer='X' board={board} onGameDrawOrWon={jest.fn()} isGameOver={false} />);
    });

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should have the label to display game status", () => {
        expect(wrapper.find("label")).toBeDefined();
    });
});

describe(("<Status/> functionality"), () => {
    it("should render the player's turn correctly", () => {
        const EXPECT_PLAYER_X_INITIALLY = 'Next Player : X';
        const wrapper = mount(<Status currentPlayer='X' board={Array(9).fill('')} onGameDrawOrWon={jest.fn()} isGameOver={false} />);
        expect(wrapper.find('label').text()).toBe(EXPECT_PLAYER_X_INITIALLY);
    });

    it("should declare X as winner if first row is completely filled by X ", () => {
        const EXPECT_PLAYER_X_WINNER = 'Winner is : X';
        const board = ['X', 'X', 'X', 'O', 'O', '', '', '', ''];
        const wrapper = mount(<Status currentPlayer='X' board={board} onGameDrawOrWon={jest.fn()} isGameOver={false} />);
        expect(wrapper.find('label').text()).toBe(EXPECT_PLAYER_X_WINNER);
    });

    it("should declare O as winner if first row is completely filled by O ", () => {
        const EXPECT_PLAYER_O_WINNER = 'Winner is : O';
        const board = ['O', 'O', 'O', 'X', 'X', '', '', 'X', ''];
        const wrapper = mount(<Status currentPlayer='O' board={board} onGameDrawOrWon={jest.fn()} isGameOver={false} />);
        expect(wrapper.find('label').text()).toBe(EXPECT_PLAYER_O_WINNER);
    });

    it("Should not allow next turn to be played on game over", () => {
        const EXPECT_WINNER_X = 'Winner is : X';
        const board = ['X', 'X', 'X', '', 'O', '', 'O', '', ''];
        const onPlayerWonMockFn = jest.fn();
        expect(onPlayerWonMockFn).toHaveBeenCalledTimes(0);

        const wrapper = mount(<Status currentPlayer='O' board={board} onGameDrawOrWon={onPlayerWonMockFn} isGameOver={false} />);
        expect(onPlayerWonMockFn).toHaveBeenCalled();
        expect(onPlayerWonMockFn).toHaveBeenCalledTimes(1);
        expect(wrapper.find('label').text()).toBe(EXPECT_WINNER_X);
    })

    it("should declare X as winner if second row is completely filled by X ", () => {
        const EXPECT_PLAYER_X_WINNER = 'Winner is : X';
        const board = ['O', '', 'O', 'X', 'X', 'X', '', '', ''];
        const wrapper = mount(<Status currentPlayer='O' board={board} onGameDrawOrWon={jest.fn()} isGameOver={false}/>);
        expect(wrapper.find('label').text()).toBe(EXPECT_PLAYER_X_WINNER);
    });

    it("should declare O as winner if second row is completely filled by O ", () => {
        const EXPECT_PLAYER_O_WINNER = 'Winner is : O';
        const board = ['X', '', 'X', 'O', 'O', 'O', '', 'X', ''];
        const wrapper = mount(<Status currentPlayer='X' board={board} onGameDrawOrWon={jest.fn()} isGameOver={false}/>);
        expect(wrapper.find('label').text()).toBe(EXPECT_PLAYER_O_WINNER);
    });

    it("should declare X as winner if third row is completely filled by X ", () => {
        const EXPECT_PLAYER_X_WINNER = 'Winner is : X';
        const board = ['O','','O','','','','X','X','X'];
        const wrapper = mount(<Status currentPlayer='O' board={board} onGameDrawOrWon={jest.fn()} isGameOver={false}/>);
        expect(wrapper.find('label').text()).toBe(EXPECT_PLAYER_X_WINNER);
    });

    it("should declare O as winner if third row is completely filled by O ", () => {
        const EXPECT_PLAYER_O_WINNER = 'Winner is : O';
        const board = ['X','','X','','X','','O','O','O'];
        const wrapper = mount(<Status currentPlayer='X' board={board} onGameDrawOrWon={jest.fn()} isGameOver={false}/>);
        expect(wrapper.find('label').text()).toBe(EXPECT_PLAYER_O_WINNER);
    });

    it("should declare X as winner if first column is completely filled by X ", () => {
        const EXPECT_PLAYER_X_WINNER = 'Winner is : X';
        const board = ['X', 'O', '', 'X', 'O', '', 'X', '', ''];
        const wrapper = mount(<Status currentPlayer='O' board={board} onGameDrawOrWon={jest.fn()} isGameOver={false}/>);
        expect(wrapper.find('label').text()).toBe(EXPECT_PLAYER_X_WINNER);
    });

    it("should declare O as winner if first column is completely filled by O ", () => {
        const EXPECT_PLAYER_O_WINNER = 'Winner is : O';
        const board = ['O', 'X', '', 'O', 'X', '', 'O', '', 'X'];
        const wrapper = mount(<Status currentPlayer='X' board={board} onGameDrawOrWon={jest.fn()} isGameOver={false}/>);
        expect(wrapper.find('label').text()).toBe(EXPECT_PLAYER_O_WINNER);
    });

    it("should declare X as winner if second column is completely filled by X ", () => {
        const EXPECT_PLAYER_X_WINNER = 'Winner is : X';
        const board = ['O', 'X', 'O', '', 'X', '', '', 'X', ''];
        const wrapper = mount(<Status currentPlayer='O' board={board} onGameDrawOrWon={jest.fn()} isGameOver={false}/>);
        expect(wrapper.find('label').text()).toBe(EXPECT_PLAYER_X_WINNER);
    });

    it("should declare O as winner if second column is completely filled by O ", () => {
        const EXPECT_PLAYER_O_WINNER = 'Winner is : O';
        const board = ['X', 'O', '', 'X', 'O', '', '', 'O', 'X'];
        const wrapper = mount(<Status currentPlayer='X' board={board} onGameDrawOrWon={jest.fn()} isGameOver={false}/>);
        expect(wrapper.find('label').text()).toBe(EXPECT_PLAYER_O_WINNER);
    });

    it("should declare X as winner if third column is completely filled by X ", () => {
        const EXPECT_PLAYER_X_WINNER = 'Winner is : X';
        const board = ['O', 'O', 'X', '', '', 'X', '', '', 'X'];
        const wrapper = mount(<Status currentPlayer='O' board={board} onGameDrawOrWon={jest.fn()} isGameOver={false}/>);
        expect(wrapper.find('label').text()).toBe(EXPECT_PLAYER_X_WINNER);
    });

    it("should declare O as winner if third column is completely filled by O ", () => {
        const EXPECT_PLAYER_O_WINNER = 'Winner is : O';
        const board = ['X', '', 'O', 'X', '', 'O', '', 'X', 'O'];
        const wrapper = mount(<Status currentPlayer='X' board={board} onGameDrawOrWon={jest.fn()} isGameOver={false}/>);
        expect(wrapper.find('label').text()).toBe(EXPECT_PLAYER_O_WINNER);
    });

    it("should declare X as winner if UpperLeft to LowerRight diagonal is completely filled by X ", () => {
        const EXPECT_PLAYER_X_WINNER = 'Winner is : X';
        const board = ['X', 'O', 'O', '', 'X', '', '', '', 'X'];
        const wrapper = mount(<Status currentPlayer='O' board={board} onGameDrawOrWon={jest.fn()} isGameOver={false}/>);
        expect(wrapper.find('label').text()).toBe(EXPECT_PLAYER_X_WINNER);
    });

    it("should declare O as winner if UpperLeft to LowerRight diagonal is completely filled by O ", () => {
        const EXPECT_PLAYER_O_WINNER = 'Winner is : O';
        const board = ['O', '', 'X', 'X', 'O', 'X', '', '', 'O'];
        const wrapper = mount(<Status currentPlayer='X' board={board} onGameDrawOrWon={jest.fn()} isGameOver={false}/>);
        expect(wrapper.find('label').text()).toBe(EXPECT_PLAYER_O_WINNER);
    });

    it("should declare X as winner if UpperRight to LowerLeft diagonal is completely filled by X ", () => {
        const EXPECT_PLAYER_X_WINNER = 'Winner is : X';
        const board = ['O', 'O', 'X', '', 'X', '', 'X', '', ''];
        const wrapper = mount(<Status currentPlayer='O' board={board} onGameDrawOrWon={jest.fn()} isGameOver={false}/>);
        expect(wrapper.find('label').text()).toBe(EXPECT_PLAYER_X_WINNER);
    }); 
    
    it("should declare O as winner if UpperRight to LowerLeft diagonal is completely filled by O ", () => {
        const EXPECT_PLAYER_O_WINNER = 'Winner is : O';
        const board = ['X', '', 'O', 'X', 'O', 'X', 'O', '', ''];
        const wrapper = mount(<Status currentPlayer='X' board={board} onGameDrawOrWon={jest.fn()} isGameOver={false}/>);
        expect(wrapper.find('label').text()).toBe(EXPECT_PLAYER_O_WINNER);
    });

    it("should be draw when all tiles are completely filled and no winner", () => {
        const EXPECT_GAME_DRAW = 'Game is draw!';
        const board = ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O'];
        const wrapper = mount(<Status currentPlayer='X' board={board} onGameDrawOrWon={jest.fn()} isGameOver={false}/>);
        expect(wrapper.find('label').text()).toBe(EXPECT_GAME_DRAW);
    });

}); 