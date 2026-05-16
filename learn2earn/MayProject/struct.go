package main

import (
	"fmt"
	// "strings"
)

// func main(){
// 	fmt.Println("Please Enter Your Username:")
// 	fmt.Println("Please Enter Your age:")
// 	var age int
// 	var name string
// 	fmt.Scanln(&name)
// 	fmt.Scanln(&age)
// 	fmt.Printf("Hi %s! You are %d Years old", name, age)
// }

/*func main(){
	// defined sharks variable as a slice of strings
	sharks := []string{"hammerhead", "bullhead", "great white"}
	sharks = append(sharks, "wale")

	for _, shark := range sharks{
		fmt.Println(shark)
	}
}/*


/*const favcolor string = "Blue"
func main(){
	var guess string
	// create an input loop
	for {
		// asking the user to guess my fav color
		fmt.Println("Guess my favorite color")
		// try to read the a line of input from the user. Print out the error 0
		if _, err := fmt.Scanln(&guess); err != nil{
			fmt.Printf("%s\n", err)
			return
		}
		if favcolor == guess{
			fmt.Printf("%q is my favorite color!\n", favcolor)
			return
		}
		fmt.Printf("Sorry, %q is not my favorite color. Guess again.\n", guess)
	}

}*/

/*func main(){
	a := "Hello, ₩¥"
	for i, c := range a {
		fmt.Printf("%d: %s\n", i, string(c))
	}
	fmt.Println("length of 'Hello, Word': ", len(a))
}*/

/*func main(){
	Sammy := map[string]string{"name": "sammy", "Color": "Blue", "location": "Ocean"}
	fmt.Println(Sammy["Color"])
}*/


/*var favColor string = "blue"
func main(){
	var guess string
	for {
		 fmt.Print("Guess my favColor:")
		if _, err := fmt.Scanln(&guess); err != nil {
			fmt.Printf("%s\n", err)
			return
		}
		guess := strings.ToLower(guess)
		if favColor == guess {
			fmt.Printf("%q is my fav:\n", favColor)
			return
		}
		fmt.Printf("%q is not my fav.\n", guess)
	 }
}*/

type Student struct {
	name string
	grades []int
	age int
	height float32
	class
}

type class struct{
	level int
}
/*func (s *Student) setAge(age int){
	s.age = age
}*/

/*func (s Student) getAveGrade() float32{
	sum := 0
	for _, v := range s.grades{
		sum += v
	}
	return float32(sum) / float32(len(s.grades))
}*/

/*func (s Student) getMaxGrade()int {
	maxGrade := 0
	
	for _, v := range s.grades{
		if v > maxGrade {
			maxGrade = v
		}
	}
	return maxGrade
}*/

func (s *Student) setHeight(height float32){
	s.height = height
}

func main(){
	s1 := Student{"Law", []int{80, 90, 99, 95, 83}, 20, 5.11, class{200}}
	
	s2 := Student{"Larry", []int{80, 90, 91, 95, 87, 90, 77}, 27, 5.6, class{100}}

	/* maxGrade := s1.getMaxGrade()
	maxGrade2 := s2.getMaxGrade()
	fmt.Println(maxGrade, maxGrade2)*/

	s1.setHeight(6.2)
	s2.setHeight(5.9)

	fmt.Println(s1, s2)

}