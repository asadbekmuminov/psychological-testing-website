
// import React from 'react';
// import { Page, Text, View, Document, StyleSheet, Svg, Path } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
// page: {
//     backgroundColor: '#fff',
//     padding: 30,
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
//   container: {
//     border: '5pt solid #003366',
//     borderRadius: 15,
//     padding: 30,
//     position: 'relative',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//   },
//   header: {
//     fontSize: 70,
//     fontWeight: 'bold',
//     color: '#003366',
//     marginBottom: 20,
//     textAlign: 'center',
//     textTransform: 'uppercase',
//     letterSpacing: 1,   // Kichiklashtirildi
//   },
//   subtitle: {
//     fontSize: 22,
//     color: '#f7b733', // sariq rang
//     fontWeight: '600',
//     marginBottom: 10,
//   },
//   name: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     color: '#003366',
//     marginBottom: 40,
//     textAlign: 'center',
//   },
//   result: {
//     fontSize: 16,
//     fontStyle: 'italic',
//     color: '#0077cc',
//     marginBottom: 50,
//     textAlign: 'center',
//   },
//   congrats: {
//     fontSize: 18,
//     color: '#333',
//     fontWeight: '500',
//     textAlign: 'center',
//     marginBottom: 40,
//   },
//   footer: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'center',
//     marginTop: 30,
//   },
//   abstractShape1: {
//     position: 'absolute',
//     top: -40,
//     left: -30,
//     opacity: 0.2,
//   },
//   abstractShape2: {
//     position: 'absolute',
//     bottom: -50,
//     right: -20,
//     opacity: 0.15,
//   },
//   dateDomain: {
//     position: 'absolute',
//     top: 40,
//     right: 40,
//     fontSize: 14,
//     color: '#003366',
//     fontWeight: '600',
//   },
//   domainLeft: {
//     position: 'absolute',
//     top: 40,
//     left: 40,
//     fontSize: 14,
//     color: '#003366',
//     fontWeight: '600',
//   }
// });

// // Abstrakt shakllar SVG yordamida (Canva'dagi o'xshash)
// const AbstractShapes = () => (
//   <>
//     <Svg height="150" width="150" style={styles.abstractShape1} viewBox="0 0 100 100" >
//       <Path
//         d="M0 30 Q50 0 100 30 T100 100 H0 Z"
//         fill="#f7b733"
//       />
//     </Svg>
//     <Svg height="180" width="180" style={styles.abstractShape2} viewBox="0 0 100 100">
//       <Path
//         d="M0 100 Q50 50 100 100 T100 0 H0 Z"
//         fill="#003366"
//       />
//     </Svg>
//   </>
// );

// const Certificate = ({ fullName, resultGroup, issueDate, domain }) => (
//   <Document>
//     <Page size="A4" orientation="landscape" style={styles.page}>
//       <View style={styles.container}>
//         <AbstractShapes />
       
      

//         <Text style={styles.header}>Certificate</Text>
     
//         <Text style={styles.name}>{fullName}</Text>
//         <Text style={styles.subtitle}>Psixologik test natijasi</Text>
//         <Text style={styles.result}>{resultGroup}</Text>
//         <Text style={styles.congrats}>Veb-saytdan foydalanganingiz uchun rahmat!</Text>
//   <Text style={styles.dateDomain}>{issueDate || new Date().toLocaleDateString()}</Text>
//         <Text style={styles.footer}>
//           © 2025 Psixologik Test 
//         </Text>
//       </View>
//     </Page>
//   </Document>
// );

// export default Certificate;
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Svg, Path } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container: {
    border: '5pt solid #003366',
    borderRadius: 15,
    padding: 30,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: '100%',  // to'liq sahifani egallaydi
  },
  header: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontStyle: 'italic',  
  },
  subtitle: {
    fontSize: 22,
    color: '#f7b733', // sariq rang
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  name: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 40,
    textAlign: 'center',
  },
  result: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#0077cc',
    marginBottom: 50,
    textAlign: 'center',
  },
  congrats: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 40,
  },
  footer: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  abstractShape1: {
    position: 'absolute',
    top: -40,
    left: -30,
    opacity: 0.2,
  },
  abstractShape2: {
    position: 'absolute',
    bottom: -50,
    right: -20,
    opacity: 0.15,
  },
  dateDomain: {
    position: 'absolute',
    top: 40,
    right: 40,
    fontSize: 14,
    color: '#003366',
    fontWeight: '600',
  },
  domainLeft: {
    position: 'absolute',
    top: 40,
    left: 40,
    fontSize: 14,
    color: '#003366',
    fontWeight: '600',
  }
});

const AbstractShapes = () => (
  <>
    <Svg height="150" width="150" style={styles.abstractShape1} viewBox="0 0 100 100" >
      <Path
        d="M0 30 Q50 0 100 30 T100 100 H0 Z"
        fill="#f7b733"
      />
    </Svg>
    <Svg height="180" width="180" style={styles.abstractShape2} viewBox="0 0 100 100">
      <Path
        d="M0 100 Q50 50 100 100 T100 0 H0 Z"
        fill="#003366"
      />
    </Svg>
  </>
);

const Certificate = ({ fullName, resultGroup, issueDate, domain }) => (
  <Document>
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.container}>
        <AbstractShapes />
      

        <Text style={styles.header}>Certificate</Text>
     
        <Text style={styles.name}>{fullName}</Text>
        <Text style={styles.subtitle}>Natija</Text>
        <Text style={styles.result}>{resultGroup}</Text>
        <Text style={styles.congrats}>Veb-saytdan foydalanganingiz uchun rahmat!</Text>
  <Text style={styles.dateDomain}>{issueDate ? new Date(issueDate).toLocaleDateString() : new Date().toLocaleDateString()}</Text>
        <Text style={styles.footer}>
          © 2025 Psixologik Test
        </Text>
      </View>
    </Page>
  </Document>
);

export default Certificate;
