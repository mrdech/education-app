import { connect } from "react-redux";
import TileView from "./TileView";
import { moveTile } from "../../reducers/reducers";

import styles from "./Game.module.css";
import FullImageView from "./FullImageView";

const Puzzle = (props) => {
  const tileWidth = 400 / props.size;
  const tileWrapperStyle = {
    width: `${props.size * tileWidth}px`,
  };
  const tileContainerStyle = {
    gridTemplateColumns: `repeat(${props.size},${tileWidth}px)`,
  };

  return (
    <>
      {!props.gameComplete && (
        <div className={styles["tile-wrapper"]} style={tileWrapperStyle}>
          <div className={styles["tile-container"]} style={tileContainerStyle}>
            {props.tiles.map((t, idx) => (
              <TileView
                key={idx}
                id={t}
                isCorrectPos={t === idx + 1}
                imageNumber={props.imageNumber}
                onClick={props.onTileClicked}
                tileWidth={tileWidth}
                size={props.size}
              />
            ))}
          </div>
        </div>
      )}
      {props.gameComplete && <FullImageView imageNumber={props.imageNumber} />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    imageNumber: state.tileGame.imageNumber,
    tiles: state.tileGame.tiles,
    size: state.tileGame.size,
    gameComplete: state.tileGame.gameComplete,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTileClicked: (id) => {
      dispatch(moveTile({ id }));
    },
  };
};

const PuzzleView = connect(mapStateToProps, mapDispatchToProps)(Puzzle);

export default PuzzleView;
