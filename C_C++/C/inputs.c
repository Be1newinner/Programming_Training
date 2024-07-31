#include <stdio.h>
#include <conio.h>

int main()
{
  int age;
  float height;
  char name[20];

  // printf("Enter your age: ");
  // scanf("%d", age); // Input integer

  // printf("Enter your height: ");
  // scanf("%f", height); // Input float

  printf("Enter your name: ");
  scanf("%s", name);

  // Input string only one character
  // scanf("%[^\n]%*c", name); // Input string complete line

  printf("Name: %s\n", name);
  // printf("Name: %s\nAge: %d\nHeight: %.2f\n", name, age, height);

  getch();
  return 0;
}
