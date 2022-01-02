#include <iostream>

using namespace std;

int main()
{
	int a=24736;
	int b=23614;
	int d=2243;
	for(int i=0;i<90;i++)
	{
		if(i%2==0)cout << b+d*(i/2) << ",";
		else cout << a+d*(i/2) << ",";
	}
}