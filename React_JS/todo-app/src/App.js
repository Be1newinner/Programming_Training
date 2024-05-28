import "./App.css";

function App() {
  const listData = [
    {
      description: "ABC Limited WOrking of Data in abn and Too and Too",
      title: "Abc To Do Grow",
      key: 0,
    },
    {
      description: "ABC Limited WOrking of Data in abn and Too and Too",
      title: "Abc To Do Grow",
      key: 1,
    },
    {
      description: "ABC Limited WOrking of Data in abn and Too and Too",
      title: "Abc To Do Grow",
      key: 2,
    },
    {
      description: "ABC Limited WOrking of Data in abn and Too and Too",
      title: "Abc To Do Grow",
      key: 3,
    },
    {
      description: "ABC Limited WOrking of Data in abn and Too and Too",
      title: "Abc To Do Grow",
      key: 4,
    },
  ];
  return (
    <div className="app_body">
      <h1 className="app_title">The ToDo App</h1>
      <div
        className="todo-app"
        style={{
          padding: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 20,
          flex: 1,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            minWidth: 700,
          }}
        >
          <div
            style={{
              backgroundColor: "pink",
            }}
          >
            <div
              style={{
                backgroundColor: "black",
                padding: 10,
                margin: 20,
                border: "5px solid blue",
              }}
            >
              <div
                style={{
                  backgroundColor: "red",
                }}
              >
                hi
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
            }}
          >
            <input
              placeholder="what do you need to do?"
              style={{
                outline: "none",
                border: "none",
                backgroundColor: "blanchedalmond",
                padding: 16,
                fontSize: 16,
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                flex: 1,
              }}
            />
            <button
              style={{
                outline: "none",
                border: "none",
                backgroundColor: "#76b7cd",
                padding: "16px 30px",
                fontSize: 16,
                borderTopRightRadius: 30,
                borderBottomRightRadius: 30,
              }}
            >
              ADD
            </button>
          </div>

          <div
            style={{
              backgroundColor: "blanchedalmond",
              display: "flex",
              width: "100%",
              padding: "10px 0",
              flex: 1,
              borderRadius: 30,
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {listData?.map((item, index) => {
              return (
                <div
                  key={item.key}
                  style={{
                    flex: 1,
                    width: "100%",
                  }}
                >
                  <div
                    className="content"
                    style={{
                      overflow: "clip",
                      flex: 1,
                      margin: "0 20px",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "left",
                        marginBottom: 0,
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        textAlign: "left",
                        color: "rgba(0,0,0,0.4)",
                        fontSize: 12,
                        marginTop: 5,
                      }}
                    >
                      {item.description}
                    </p>

                    {index !== listData.length - 1 ? (
                      <div
                        style={{
                          borderTop: "1px solid grey",
                        }}
                      />
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
