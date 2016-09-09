#include <iostream>
using namespace std;


int i;
void f(int a,int b)
{
    
    for(i=a;i<=b;i++)
    {
        if(i%3==0 &&  i%5==0)
            cout<<"FizzBuzz"<<endl;
        else if(i%3==0)
            cout<<"Buzz"<<endl;
        else if(i%5 == 0)
            cout<<"Fizz"<<endl;
        else cout<<i<<endl;
    }
    
    
}
int main()
{
    int k,j;
    cin>>k;
    cin>>j;
    f(k,j);
    
}

