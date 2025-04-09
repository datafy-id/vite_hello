export function Demo3() {
  return (
    <div>
      {/* Targets all descendants */}
      <div className="[&_*]:border [&_*]:border-red-500">
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
        <div className="grid grid-cols-6">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>
            <div>i</div>
            <div>ii</div>
          </div>
        </div>
      </div>

      <br />

      {/* using css variables */}
      <div
        style={{ ["--width" as string]: "100px" }}
        className="w-[var(--width)] bg-red-100"
      >
        A
      </div>
      <br />
    </div>
  );
}
