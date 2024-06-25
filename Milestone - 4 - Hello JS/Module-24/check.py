import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier, ExtraTreesClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.preprocessing import LabelEncoder
import joblib
from google.colab import drive

# Mount the Google Drive (if using Google Colab)
drive.mount('/content/drive')
csvFile = '/content/drive/My Drive/Thesis/cprs_dataset.csv'

# Check if the file exists
import os
if not os.path.exists(csvFile):
    print(f"File is {csvFile} not found.")
else:
    try:
        # Load the dataset without skipping rows
        dataFrame = pd.read_csv(csvFile)
        # print("Dataset loaded successfully")

        # Check for null values in the dataset
        if dataFrame.isnull().any().any():
            print("Null values found.")

            nullValueRows = dataFrame[dataFrame.isnull().any(axis=1)]
            print(nullValueRows.head())
        else:
            pass
            # print("No null values found in the dataset.")

        # Separate features and target
        X = dataFrame.drop('Career Path', axis=1)
        # axis = 1 means column in pandas
        # axis = 0 means rows in pandas
        # X contains all the columns except the Career Path column. Here X is the input variable used to train the model.

        y = dataFrame['Career Path']
        # y contains the career path column only. This is also called output variable.

        # Encode the input columns
        labelEncoders = {}
        for column in X.select_dtypes(include=['object']).columns:
            le = LabelEncoder()
            X[column] = le.fit_transform(X[column])
            labelEncoders[column] = le
            # Debug: Print the first few encoded values to ensure correctness
            # print(f"Encoded values for {column}: {X[column].unique()[:5]}")

        # Encode the output columns
        targetLevel = LabelEncoder()
        y = targetLevel.fit_transform(y)

        # Check the distribution of the target variable or output column
        # print("Target variable distribution in the whole dataset:")
        # print(pd.Series(y).value_counts())

        # Split the data into training and testing sets
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

        # Check the distribution of the target variable in the training and testing sets
        # print("Target variable distribution in the training set:")
        # print(pd.Series(y_train).value_counts())
        # print("Target variable distribution in the testing set:")
        # print(pd.Series(y_test).value_counts())

        # Debug: Print shapes of training and testing data
        # print(f"X_train shape: {X_train.shape}")
        # print(f"X_test shape: {X_test.shape}")
        # print(f"y_train shape: {y_train.shape}")
        # print(f"y_test shape: {y_test.shape}")

    except Exception as e:
        print(f"An error occurred: {e}")


#------------------------------------------Best Accuracy: Extra Trees Classifier Evaluation: 87.50%--------------------------------------------------------------------------------
# print("*** Extra Trees Classifier Evaluation ***")
modelExtraTrees = ExtraTreesClassifier(n_estimators=100, random_state=42)
modelExtraTrees.fit(X_train, y_train)

yPred = modelExtraTrees.predict(X_test)

accuracyExtraTrees = accuracy_score(y_test, yPred)
report = classification_report(y_test, yPred)

print(f"Accuracy from Extra Trees Classifier: {accuracyExtraTrees}")
print(f"Classification Report:\n{report}")

# ------------------------------------------Random Forest Classifier Evaluation: 83.75%--------------------------------------------------
print("*** Random Forest Classifier Evaluation ***")
model_rf = RandomForestClassifier(random_state=42)
model_rf.fit(X_train, y_train)

y_pred_rf = model_rf.predict(X_test)

accuracy = accuracy_score(y_test, y_pred_rf)
report_rf = classification_report(y_test, y_pred_rf)

print(f"Accuracy from Random Forest Classifier: {accuracy}")
print(f"Classification Report:\n{report_rf}")


# ---------------Gradient Boosting Classifier Evaluation: 6938%-----------------------------------------------------------
print("\n\n*** Gradient Boosting Classifier Evaluation ***")
modelGb = GradientBoostingClassifier(random_state=42)
modelGb.fit(X_train, y_train)

yPred = modelGb.predict(X_test)

accuracy = accuracy_score(y_test, yPred)
report = classification_report(y_test, yPred)

print(f"Accuracy from Gradient Boosting Classifier: {accuracy}")
print(f"Classification Report:\n{report}")