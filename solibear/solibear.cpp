// solibear.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include <stdio.h>
#include <stdlib.h>
#include <windows.h>

int A[] = {1,3,5,6,7,11,13,15,16,21,23,24,29,31,32,33,35,37,41,45,47,48,52,57,61,63,65,67,68,81};
int B[] = {8,17,18,25,27,30,36,38,39,40,42,46,49,50,51,55,58,71,72,73,77};
int C[] = {2,4,9,10,12,14,19,20,22,26,28,34,43,44,53,54,56,59,60,62,64,66,69,70,74,75,76,78,79,80};

void usage() {
	printf("Usage: Solibear X Y Z\n");
	printf("\tX,Y,Z:  1-50\n");
	printf("License: Written for solibear's wife.Price $10.\n");
}

int _tmain(int argc, _TCHAR* argv[])
{
	if(argc != 4) {
		usage();
		exit(1);
	}

	int x = atoi(argv[1]);
	int y = atoi(argv[2]);
	int z = atoi(argv[3]);
	if (x > 50 || x < 1) {
		usage();
		exit(1);
	}

	if (y > 50 || y < 1) {
		usage();
		exit(1);
	}

	if (z > 50 || z < 1) {
		usage();
		exit(1);
	}

	printf("Input: X=%d Y=%d Z=%d\n", x, y, z);
	
	int result[5][2] = {0};
	result[0][0] = x+1;
	result[1][0] = x+y;
	result[2][0] = y+z;
	result[3][0] = z+1;
	result[4][0] = x+y+z;

	for (int i=0; i<5; i++) {
		for(int j=0; j<sizeof(A)/sizeof(int); j++) {
			if (A[j] == result[i][0]) {
				result[i][1] = FOREGROUND_GREEN;
			} 
		}
		if (result[i][1] != 0 ) {
			continue;
		}

		for(int j=0; j<sizeof(B)/sizeof(int); j++) {
			if (B[j] == result[i][0]) {
				result[i][1] = FOREGROUND_BLUE;
			}
		}
		if (result[i][1] != 0 ) {
			continue;
		}

		for(int j=0; j<sizeof(C)/sizeof(int); j++) {
			if (C[j] == result[i][0]) {
				result[i][1] = FOREGROUND_RED;
			}
		}

		if (result[i][1] != 0 ) {
			continue;
		}

		result[i][1] = FOREGROUND_INTENSITY;
	}

	//output 
	HANDLE consolehwnd; 
	consolehwnd = GetStdHandle(STD_OUTPUT_HANDLE); 
	//
	printf("Result:");
	for(int i=0; i<5; i++) {
		SetConsoleTextAttribute(consolehwnd,result[i][1]);
		printf("%d ", result[i][0]);
	}
	printf("\n");
	SetConsoleTextAttribute(consolehwnd,FOREGROUND_GREEN|FOREGROUND_BLUE|FOREGROUND_RED);

#ifdef _DEBUG
	system("pause");
#endif

	return 0;
}

