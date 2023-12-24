const ThirdPage = () => {
  // State yang akan berisi data tarikan dari eksternal
  const [data, setData] = useState("");

  // Standard useEffet untuk menarik data
  useEffect(
    () => {
      // IIFE untuk fetch data
      (async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const responseJson = await response.json();

        setData(responseJson);
      })();
    },
    // Deps list array kosong untuk tarik data 1x saja
    []
  );

  // Ini adalah fungsi yang akan menerima sebuah Object,
  // dimana salah satu propsnya bernama item
  const renderItem = ({ item }) => {
    // Kita akan render Item yang didapatkan di sini
    return (
      // Di sini kita akan mencoba untuk menggunakan TouchableOpacity
      // (Karena Button susah untuk di-styling)
      <TouchableOpacity
        style={styles.listButton}
        onPress={(event) => {
          console.log(item.id);
        }}
      >
        <Text style={styles.listText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    // Di sini kita akan mencoba menggunakan FlatList
    // harus ada required attributes:
    // - data = data yang akan diterima
    // - renderItem = Function Component yang akan dirender untuk setiap datum yang ditemukan
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};
