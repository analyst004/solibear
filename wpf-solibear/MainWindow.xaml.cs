using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace wpf_solibear
{
    class ResultItem
    {
        public int value;
        public SolidColorBrush color;
    }

    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {

        private int[] m_listA = {1,3,5,6,7,11,13,15,16,21,23,24,29,31,32,33,35,37,41,45,47,48,52,57,61,63,65,67,68,81};
        private int[] m_listB = {8,17,18,25,27,30,36,38,39,40,42,46,49,50,51,55,58,71,72,73,77};
        private int[] m_listC = {2,4,9,10,12,14,19,20,22,26,28,34,43,44,53,54,56,59,60,62,64,66,69,70,74,75,76,78,79,80};

        public MainWindow()
        {
            InitializeComponent();

            IList<int> inputList = new List<int>();
            for( int i=1; i<=50; i++ ){

                inputList.Add(i);
            }

            comboX.ItemsSource = inputList;
            comboY.ItemsSource = inputList;
            comboZ.ItemsSource = inputList;
            
        }

        private void displayResult(IList<ResultItem> result) 
        {
            labelA.Content = Convert.ToString(result[0].value);
            labelA.Foreground = result[0].color;
            labelB.Content = Convert.ToString(result[1].value);
            labelB.Foreground = result[1].color;
            labelC.Content = Convert.ToString(result[2].value);
            labelC.Foreground = result[2].color;
            labelD.Content = Convert.ToString(result[3].value);
            labelD.Foreground = result[3].color;
            labelE.Content = Convert.ToString(result[4].value);
            labelE.Foreground = result[4].color;
        }

        private SolidColorBrush getColor(int value)
        {

            for (int j = 0; j < m_listA.Length; j++)
            {
                if (m_listA[j] == value)
                {
                    return Brushes.Green;
                }
            }

            for (int j = 0; j < m_listB.Length; j++)
            {
                if (m_listB[j] == value)
                {
                    return Brushes.Blue;
                }
            }

            for (int j = 0; j < m_listC.Length; j++)
            {
                if (m_listC[j] == value)
                {
                    return Brushes.Red;
                }
            }

            return Brushes.Gray;
        }

        private void combo_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            int x = 0;
            try
            {
                string strX = comboX.SelectedItem.ToString();
                x = Convert.ToInt32(strX);
            }
            catch (Exception e1)
            {
                x = 0;
            }

            int y = 0;
            try
            {
                string strY = comboY.SelectedItem.ToString();
                y = Convert.ToInt32(strY);
            }
            catch (Exception e1)
            {
                x = 0;
            }

            int z = 0;
            try
            {
                string strZ = comboZ.SelectedItem.ToString();
                z = Convert.ToInt32(strZ);
            }
            catch (Exception e1)
            {
                z = 0;
            }
            
            IList<ResultItem> result = new List<ResultItem>();

            ResultItem item = new ResultItem();
            item.value = x+1;
            item.color = getColor(item.value);
            result.Add(item);

            item = new ResultItem();
            item.value = x+y;
            item.color = getColor(item.value);
            result.Add(item);

            item = new ResultItem();
            item.value = y+z;
            item.color = getColor(item.value);
            result.Add(item);

            item = new ResultItem();
            item.value = z+1;
            item.color = getColor(item.value);
            result.Add(item);

            item = new ResultItem();
            item.value = x+y+z;
            item.color = getColor(item.value);
            result.Add(item);

            displayResult(result);
            
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            System.Environment.Exit(0);
        }

    }
}
