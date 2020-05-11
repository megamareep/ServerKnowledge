package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {

	fmt.Print("Server Started!!\n")
	http.HandleFunc("/", helloServer)
	if err := http.ListenAndServe(":8081", nil); err != nil {
		panic(err)
	}
}

//user
type User struct {
	name  string
	hobby string
}

func helloServer(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Content-Type", "application/json")
	user := User{"Tom", "Programming"}
	json.NewEncoder(w).Encode(user)
}
