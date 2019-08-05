import { toMatchDiffSnapshot, getSnapshotDiffSerializer } from "snapshot-diff";
import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";

expect.addSnapshotSerializer(getSnapshotDiffSerializer());
expect.extend({ toMatchDiffSnapshot });
