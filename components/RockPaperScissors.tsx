import { Selection, usePlayLazyQuery } from "@gen/graphql";
import { FunctionComponent } from "react";

const RockPaperScissors: FunctionComponent = () => {
  const [playSelection, { data, loading }] = usePlayLazyQuery({
    fetchPolicy: "no-cache",
  });

  const handleSelection = (selection: Selection) => {
    playSelection({
      variables: {
        selection,
      },
    });
  };

  return (
    <div className="root">
      <h1>Rock Paper Scissors</h1>
      <h3>Choose wisely</h3>
      <div className="player-selections">
        <PlayerSelection
          selection={Selection.Rock}
          onSelect={handleSelection}
        />
        <PlayerSelection
          selection={Selection.Paper}
          onSelect={handleSelection}
        />
        <PlayerSelection
          selection={Selection.Scissors}
          onSelect={handleSelection}
        />
      </div>
      {loading && <p>Waiting on opponent...</p>}
      {data?.play && (
        <div>
          <p>
            {`Opponent chose ${data.play.opponentSelection} ${emojiFor(
              data.play.opponentSelection
            )}`}
          </p>
          <h3>{data.play.message}</h3>
        </div>
      )}
      <style jsx>{`
        font-family: Verdana, sans-serif;
        .root {
          text-align: center;
        }

        .player-selections {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

interface PlayerSelectionProps {
  selection: Selection;
  onSelect: (selection: Selection) => void;
}
const PlayerSelection: FunctionComponent<PlayerSelectionProps> = (props) => {
  const { selection, onSelect } = props;

  return (
    <button type="button" className="root" onClick={() => onSelect(selection)}>
      <div className="emoji">{emojiFor(selection)}</div>
      <div className="selection">{selection}</div>
      <style jsx>{`
        font-family: Verdana, sans-serif;

        .root {
          padding: 16px 32px;
          margin: 16px;
          text-align: center;
          cursor: pointer;
        }

        .emoji {
          font-size: 4.8rem;
          line-height: 1;
          margin-bottom: 16px;
        }

        @media only screen and (max-width: 600px) {
          .root {
            padding: 8px 16px;
            margin: 8px;
          }
          .emoji {
            font-size: 1rem;
          }
        }
      `}</style>
    </button>
  );
};

function emojiFor(selection: Selection): string {
  switch (selection) {
    case Selection.Rock:
      return "✊🏼";
    case Selection.Paper:
      return "🖐🏼";
    case Selection.Scissors:
      return "✌🏼";
    default:
      throw new Error("Unrecognized selection");
  }
}

export default RockPaperScissors;
